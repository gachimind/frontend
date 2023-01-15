import styled from 'styled-components';

import boardImage from '../../assets/scoreBoard.svg';

const ScoreBoard = () => {
  return <BoardImage src={boardImage} />;
};

const BoardImage = styled.img`
  width: 408px;
  height: 624px;
`;

export default ScoreBoard;
