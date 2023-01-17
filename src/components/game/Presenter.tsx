import styled from 'styled-components';

import circleIcon from '../../assets/circleIcon.svg';
import micOnCamIcon from '../../assets/micOnCamIcon.svg';

const Presenter = () => {
  return (
    <PresenterBarLayout>
      <CamNicknameBox>
        <img src={circleIcon} />
        <span>닉네임</span>
      </CamNicknameBox>
      <img src={micOnCamIcon} />
    </PresenterBarLayout>
  );
};

const PresenterBarLayout = styled.div`
  font-family: ${(props) => props.theme.font.korean};
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 58px;
  bottom: 0;
  gap: 315px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CamNicknameBox = styled.div`
  gap: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Presenter;
