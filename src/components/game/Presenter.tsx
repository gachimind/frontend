import styled from 'styled-components';

import ImageHolderIcon from '@assets/svg_imageHolderIcon.svg';
import MicOnIcon from '@assets/svg_micOnIcon.svg';

// TODO: 마이크 꺼졌을때 아이콘 추가하기
const Presenter = () => {
  return (
    <PresenterLayout>
      <PresenterStatusBox>
        <div>
          <img src={ImageHolderIcon} />
          <span>닉네임</span>
        </div>
        <img className="mic-icon" src={MicOnIcon} />
      </PresenterStatusBox>
    </PresenterLayout>
  );
};

const PresenterLayout = styled.div``;

const PresenterStatusBox = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 58px;
  bottom: 0;
  padding-left: 24px;
  display: flex;
  align-items: center;

  div {
    gap: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.font.korean};
      font-weight: 700;
      font-size: 16px;
    }
  }

  .mic-icon {
    margin-left: 319px;
  }
`;

export default Presenter;
