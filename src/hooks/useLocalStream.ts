import React, { useRef } from 'react';

import { useAppDispatch } from '@redux/hooks';
import {
  ConstraintsType,
  initMediaStatus,
  setLocalDeviceAudio,
  setLocalDeviceVideo,
  setMediaDone,
  setMediaLoading,
  setUserCam,
  setUserMic,
  setUserStream,
  setUserStreamRef,
} from '@redux/modules/userMediaSlice';

const useLocalStream = () => {
  const dispatch = useAppDispatch();
  const streamRef = useRef<MediaStream>();
  const userMicPermissionRef = useRef<boolean>(false);
  const userCamPermissionRef = useRef<boolean>(false);

  const initLocalStream = async () => {
    await getLocalStream();
    dispatch(setMediaDone());
    console.log('[ready] local stream');
  };

  const destroyLocalStream = (streamRef: React.MutableRefObject<MediaStream | undefined>) => {
    streamRef?.current?.getTracks().forEach((track) => track.stop());
    dispatch(setUserStreamRef(streamRef));
    dispatch(initMediaStatus());
  };

  const getLocalStream = async () => {
    dispatch(setMediaLoading());
    const devices = await navigator.mediaDevices.enumerateDevices();
    const hasCam = devices.some((device) => device.kind === 'videoinput');
    const hasMic = devices.some((device) => device.kind === 'audioinput');
    if (!hasCam && !hasMic) {
      setEmptyLocalStream();
      return;
    }
    await getUserPermission({ video: hasCam, audio: hasMic });
  };

  const getMyMedia = async (constraints: ConstraintsType) => {
    try {
      if (constraints.audio) {
        constraints.audio = { echoCancellation: true, noiseSuppression: true };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        streamRef.current = stream;
        dispatch(setUserStream(stream));
        dispatch(setUserStreamRef(streamRef));
        setCamDevice(userCamPermissionRef.current);
        setMicDevice(userMicPermissionRef.current);
      }
    } catch (error) {
      setEmptyLocalStream();
    }
  };

  const getDevicePermissionState = async (
    device: 'camera' | 'microphone',
    deviceRef: React.MutableRefObject<boolean>,
  ) => {
    const devicePermissionName = device as PermissionName;
    const permission = await navigator.permissions.query({ name: devicePermissionName });
    const isAccessible = permission && permission.state !== 'denied';
    deviceRef.current = isAccessible;
  };

  const getUserPermission = async (constraints: ConstraintsType) => {
    constraints.audio && getDevicePermissionState('microphone', userMicPermissionRef);
    constraints.video && getDevicePermissionState('camera', userCamPermissionRef);
    await getMyMedia({ video: constraints.video, audio: constraints.audio });
  };

  function setMicDevice(audio: boolean) {
    dispatch(setLocalDeviceAudio(audio));
    dispatch(setUserMic(audio));
  }

  function setCamDevice(video: boolean) {
    dispatch(setLocalDeviceVideo(video));
    dispatch(setUserCam(video));
  }

  function setEmptyLocalStream() {
    const emptyStream = new MediaStream();
    streamRef.current = emptyStream;
    dispatch(setUserStream(emptyStream));
    dispatch(setUserStreamRef(streamRef));
    dispatch(setUserCam(false));
    dispatch(setUserMic(false));
  }

  return { initLocalStream, destroyLocalStream };
};

export default useLocalStream;
