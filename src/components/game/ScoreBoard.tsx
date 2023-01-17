import styled from 'styled-components';

// TODO: 임시 이미지로 추후 수정되어야 한다.
import ScoreBoardImage from '@assets/svg_scoreBoardImage.svg';

const ScoreBoard = () => {
  return <BoardImage src={ScoreBoardImage} />;
};

const BoardImage = styled.img`
  width: 408px;
  height: 624px;
`;

export default ScoreBoard;
