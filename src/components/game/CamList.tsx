import { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

import useStreamUpdateSocket from '@hooks/socket/useStreamUpdateSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserCam, setUserMic } from '@redux/modules/userMediaSlice';

import Cam from './Cam';
import CamListSliderArrow from './CamListSliderArrow';

// TODO: 사용자들의 캠 대신 이름으로 참여 여부를 먼저 나타냈다. 수정되어야 한다.
const CamList = () => {
  const { userStream, userCam, userMic, userStreamRef } = useAppSelector((state) => state.userMedia);
  const { playerList, playerStreamMap } = useAppSelector((state) => state.playerMedia);
  const [hasSlider, setHasSlider] = useState<{ hasPrev: boolean; hasNext: boolean }>({
    hasPrev: false,
    hasNext: true,
  });
  const [emptyUserCount, setEmptyUserCount] = useState<number>(0);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { onUpdateUserStream, offUpdateUserStream } = useStreamUpdateSocket();

  useEffect(() => {
    // XXX: 우선은 끈 상태로 시작하게 했지만..???
    if (userStreamRef?.current) {
      dispatch(setUserCam(false));
      dispatch(setUserMic(false));
      userStreamRef.current.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
      userStreamRef.current.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
    }
  }, []);

  useEffect(() => {
    setEmptyUserCount(playerList.length < 3 ? 3 - playerList.length : 0);
    onUpdateUserStream();
    return () => {
      offUpdateUserStream();
    };
  }, [playerList]);

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
      <CamListSliderArrow
        direction="right"
        hasSlider={hasSlider.hasNext}
        setHasSlider={() => setHasSlider({ hasNext: false, hasPrev: true })}
      />
    ),
    prevArrow: (
      <CamListSliderArrow
        direction="left"
        hasSlider={hasSlider.hasPrev}
        setHasSlider={() => setHasSlider({ hasNext: true, hasPrev: false })}
      />
    ),
  };

  return (
    <CamListLayout {...settings}>
      {playerList.map((player, index) => {
        return (
          <div key={player.userId}>
            {player.userId === user?.userId ? (
              <Cam
                userStream={userStream}
                nickname={user.nickname}
                video={userCam}
                audio={userMic}
                isMe={true}
                isHost={index === 0}
              />
            ) : (
              <Cam
                key={player.userId}
                userStream={playerStreamMap[player.socketId]}
                nickname={player.nickname}
                video={player.video}
                audio={player.audio}
                isHost={index === 0}
              />
            )}
          </div>
        );
      })}
      {emptyUserCount !== 0 && [...Array(emptyUserCount)].map((v) => <Cam key={v} nickname={'EMPTY'} />)}
    </CamListLayout>
  );
};

const CamListLayout = styled(Slider)`
  width: 560px;
`;

export default CamList;
