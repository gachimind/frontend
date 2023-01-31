import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { getCatInfoByQuery } from '@utils/character';

import CatOnGame from '@components/character/CatOnGame';

import { Participant } from '@customTypes/gameRoomType';

const PlayerCat = ({ participant }: { participant: Participant }) => {
  const { cat, rocket } = getCatInfoByQuery(participant.profileImg);
  const [score, setScore] = useState<{ score: number }>({ score: 0 });

  useEffect(() => {
    if (!participant.score || score.score === participant.score) {
      return;
    }
    setScore({ score: participant.score - score.score });
  }, [participant]);

  return (
    <PlayerCatLayout score={participant.score} isReady={participant.isHost ? true : participant.isReady ? true : false}>
      <div>
        <CatOnGame
          catTheme={cat}
          rocketTheme={rocket}
          nickname={participant.nickname}
          catType={participant.isHost ? 'rocket' : participant.isReady ? 'rocket' : 'body'}
          hasIdlePopupAnimation={true}
          size="small"
          scale={0.75}
          scoreInfo={score}
          catMarginTop={-30}
        />
      </div>
    </PlayerCatLayout>
  );
};

const PlayerCatLayout = styled.div<{
  isReady: boolean;
  score: number;
}>`
  height: ${(props) => (props.isReady ? '140px' : '110px')};
  transform: translateY(${(props) => -(props.score * 0.8) + 'px'});
  transition: all 2s;
  transition-delay: 1s;
  -webkit-transition: all 2s;
  -webkit-transition-delay: 1s;
  -moz-transition: all 2s;
  -moz-transition-delay: 1s;
`;

export default PlayerCat;
