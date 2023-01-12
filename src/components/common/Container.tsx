import styled from 'styled-components';

interface ContainerProps {
  page?: string;
  containerType?: string;
  title?: string;
  children?: React.ReactNode;
  width?: number;
  height?: number;
}

interface ContainerTypes {
  [key: string]: string;
  template: string;
  profile: string;
  roomSelection: string;
}

const Container = ({ containerType, page, title, height, width, children }: ContainerProps) => {
  return (
    <ContainerLayout
      containerType={containerType}
      // TODO: 사용하고자 하는 컴포넌트에서 containerType만 보내고, width와 height는 이 컴포넌트 내에서 처리할 수 있도록 수정한다.
      style={{
        height: height + 'vh',
        width: width + 'vw',
      }}
    >
      <HeaderBox>
        {page === 'main' && (
          // TODO: 로그인 버튼이 필요하지 않은 페이지는 로그인 버튼을 빼준다.
          <>
            <Logo>Logo</Logo>
            <LoginButton>Login</LoginButton>
          </>
        )}
        {title && <Title>{title}</Title>}
      </HeaderBox>
      {children}
      {
        // TODO: page에 따라 다른 버튼이 들어간다. 컴포넌트 분리?
        page === 'main' && (
          <FooterBox>
            <div className="footer-button">버튼</div>
            <div className="footer-button">버튼</div>
            <div className="footer-button">버튼</div>
            <div className="footer-button">버튼</div>
          </FooterBox>
        )
      }
      {page === 'room' && (
        <FooterBox>
          <div className="room-footer-button">rule</div>
          <div id="media">
            <div className="room-footer-button">MIC</div>
            <div className="room-footer-button">CAM</div>
          </div>
          <div className="room-footer-button">나가기</div>
        </FooterBox>
      )}
      {page === 'mypage' && (
        <FooterBox>
          <div className="footer-button">버튼</div>
          <div className="footer-button">버튼</div>
          <div className="footer-button">버튼</div>
          <div className="footer-button">버튼</div>
        </FooterBox>
      )}
    </ContainerLayout>
  );
};

const containerHeight: ContainerTypes = {
  template: '86.8945868945869vh',
  profile: '17.578125vh',
  roomSelection: '48.828125vh',
};

const containerWidth: ContainerTypes = {
  template: '84.63541666666667vw',
  profile: '67.22689075630252vw',
  roomSelection: '67.22689075630252vw',
};

const ContainerLayout = styled.div<{ containerType: string | undefined }>`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap');
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  border: 5px solid #f0f0f0;
  box-shadow: 10px 7px black;
  display: grid;
  box-sizing: border-box;
  /* height: ${({ containerType }) => containerType && containerHeight[containerType]}; */
  /* width: ${({ containerType }) => containerType && containerWidth[containerType]}; */
`;

const HeaderBox = styled.div`
  background-color: #f0f0f0;
  color: black;
  height: 25px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.span`
  background-color: #696969;
  width: 150px;
  margin-left: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  border: 0;
  margin-right: 40px;
`;

const Title = styled.span`
  margin: auto;
`;

const FooterBox = styled.div`
  background-color: #757575;
  height: 30px;
  margin-top: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-button {
    cursor: pointer;
    background-color: #f0f0f0;
    width: 40px;
    height: 20px;
  }
  .room-footer-button {
    cursor: pointer;
    background-color: #f0f0f0;
    width: 60px;
    height: 20px;
  }
  #media {
    gap: 10px;
    display: flex;
    flex-direction: row;
    margin-left: 300px;
    margin-right: 300px;
  }
`;

export default Container;
