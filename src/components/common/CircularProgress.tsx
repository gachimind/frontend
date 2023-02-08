import styled, { keyframes } from 'styled-components';

const CircularProgress = ({ second }: { second: number }) => {
  return (
    <CircularProgressLayout>
      <ProgressBox second={second}>
        <OverlayBox />
        <div className="left"></div>
        <div className="right"></div>
      </ProgressBox>
    </CircularProgressLayout>
  );
};

const LoadRightHalf = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const LoadLeftHalf = keyframes`
  0% {
    z-index: 100;
    transform: rotate(180deg);
  }
  100% {
    z-index: 100;
    transform: rotate(360deg);
  }
`;

const CircularProgressLayout = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const ProgressBox = styled.div<{ second: number }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: #07070c;
  text-align: center;
  line-height: 50px;
  margin: 20px;

  .left,
  .right {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 10px solid ${(props) => props.theme.colors.lightGrey2};
    border-radius: 100px 0px 0px 100px;
    border-right: 0;
    transform-origin: right;
  }

  .left {
    animation: ${LoadRightHalf} ${(props) => props.second / 2}s linear forwards;
  }

  :first-of-type .right,
  :last-of-type .right {
    animation: ${LoadLeftHalf} ${(props) => props.second / 2}s linear forwards ${(props) => props.second / 2}s;
  }
`;

const OverlayBox = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #07070c;
`;

export default CircularProgress;
