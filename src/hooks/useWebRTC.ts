import { useCallback, useEffect, useRef } from 'react';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { addPlayerPeer, addPlayerStream } from '@redux/modules/playerMediaSlice';

import socketInstance from './socket/socketInstance';

const useWebRTC = () => {
  const dispatch = useAppDispatch();
  const { userStreamRef } = useAppSelector((state) => state.userMedia);
  const { playerStreamMap } = useAppSelector((state) => state.playerMedia);
  const pcsRef = useRef<{ [socketId: string]: RTCPeerConnection }>({});
  const { on, emit, off } = socketInstance;

  const createPeerConnection = useCallback(async (peerSocketId: string): Promise<any> => {
    const result = await new Promise((resolve) => {
      try {
        const peerConnection = new RTCPeerConnection({
          iceServers: [
            {
              urls: 'stun:stun.l.google.com:19302',
            },
            {
              urls: process.env.REACT_APP_API_TURN_SERVER_DOMAIN ?? 'stun:stun.l.google.com:19302',
              username: process.env.REACT_APP_API_TURN_SERVER_USER ?? '',
              credential: process.env.REACT_APP_API_TURN_SERVER_CREDENTIAL ?? '',
            },
          ],
        });
        peerConnection.onicecandidate = (e) => {
          if (e.candidate) {
            setTimeout(() => {
              emit(SUBSCRIBE.webRTCIce, {
                data: {
                  ice: e.candidate,
                  candidateReceiveSocketId: peerSocketId,
                },
              });
            }, 500);
          }
        };
        if (!userStreamRef?.current) {
          alert('no selfStream');
          return;
        }
        userStreamRef.current.getTracks().forEach((track) => {
          userStreamRef.current && peerConnection.addTrack(track, userStreamRef.current);
        });
        peerConnection.ontrack = (e) => {
          dispatch(addPlayerStream({ socketId: peerSocketId, stream: e.streams[0] }));
          dispatch(addPlayerPeer({ socketId: peerSocketId, peer: peerConnection }));
        };
        resolve(peerConnection);
      } catch (error) {
        console.log(error);
        return undefined;
      }
    });
    return result;
  }, []);

  const createOffers = async (socketId: string) => {
    if (pcsRef.current[socketId]) {
      return;
    }
    const peerConnection: RTCPeerConnection = await createPeerConnection(socketId);
    if (!peerConnection) {
      alert('no peerconnnection');
      return;
    }
    pcsRef.current = { ...pcsRef.current, [socketId]: peerConnection };
    try {
      const localSessionDescription = await peerConnection.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      });
      peerConnection.setLocalDescription(new RTCSessionDescription(localSessionDescription));
      emit(PUBLISH.webRTCOffer, {
        data: {
          sessionDescription: localSessionDescription,
          offerReceiveSocketId: socketId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    on(
      SUBSCRIBE.webRTCOffer,
      async ({
        data: { sessionDescription, offerSendSocketId },
      }: {
        data: { sessionDescription: RTCSessionDescription; offerSendSocketId: string };
      }) => {
        const peerconnection = await createPeerConnection(offerSendSocketId);
        if (!peerconnection) {
          return;
        }
        pcsRef.current = { ...pcsRef.current, [offerSendSocketId]: peerconnection };
        try {
          peerconnection.setRemoteDescription(new RTCSessionDescription(sessionDescription));
          const localSessionDescription = await peerconnection.createAnswer({
            offerToReceiveAudio: true,
            offerToReceiveVideo: true,
          });
          peerconnection.setLocalDescription(new RTCSessionDescription(localSessionDescription));
          emit(PUBLISH.webRTCAnswer, {
            data: {
              sessionDescription: localSessionDescription,
              answerReceiveSocketId: offerSendSocketId,
            },
          });
        } catch (error) {
          console.log(error);
        }
      },
    );

    on(
      SUBSCRIBE.webRTCAnswer,
      ({
        data: { sessionDescription, answerSendSocketId },
      }: {
        data: { sessionDescription: RTCSessionDescription; answerSendSocketId: string };
      }) => {
        const peerconnection: RTCPeerConnection = pcsRef.current[answerSendSocketId];
        if (!peerconnection) {
          alert('[on] webrtc-answer - no peerconnection!');
          return;
        }
        peerconnection.setRemoteDescription(new RTCSessionDescription(sessionDescription));
      },
    );

    on(
      SUBSCRIBE.webRTCIce,
      async ({ data: { ice, iceSendSocketId } }: { data: { ice: RTCIceCandidate; iceSendSocketId: string } }) => {
        const peerconnection: RTCPeerConnection = pcsRef.current[iceSendSocketId];
        if (!peerconnection) {
          return;
        }
        try {
          await peerconnection.addIceCandidate(new RTCIceCandidate(ice));
        } catch (e) {
          console.log('ice-candidate-error');
        }
      },
    );

    on(SUBSCRIBE.webRTCLeave, ({ data: { leaverSocketId } }: { data: { leaverSocketId: string } }) => {
      delete pcsRef.current[leaverSocketId];
    });

    return () => {
      off(SUBSCRIBE.webRTCOffer);
      off(SUBSCRIBE.webRTCAnswer);
      off(SUBSCRIBE.webRTCIce);
      off(SUBSCRIBE.webRTCLeave);
    };
  }, [playerStreamMap]);

  useEffect(() => {
    return () => {
      emit('webrtc- leave');
      Object.entries(playerStreamMap).forEach((map) => {
        const socketId = map[0];
        const stream = map[1];
        if (!stream || !pcsRef.current[socketId]) {
          return;
        }
        pcsRef.current[socketId].close();
        delete pcsRef.current[socketId];
      });
    };
  }, []);

  return { createOffers };
};

export default useWebRTC;
