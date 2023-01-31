import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import logoIcon from '@assets/png_logoIcon.png';
import cursorIcon from '@assets/svg_cursorIcon.svg';

const Header = ({ page, children }: { page?: string; children?: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <HeaderContents>
        <LogoBox id="service-name" onClick={() => page !== 'ROOM' && navigate('/')}>
          <img src={logoIcon} />
          <span>GACHIMIND</span>
        </LogoBox>
        <ServiceDescription>CODING INTERVIEW GAME *** 2023 ***</ServiceDescription>
      </HeaderContents>
      {children}
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.lightGrey6};
  box-shadow: 2px 0px ${(props) => props.theme.colors.lightGrey6}, -2px -2px ${(props) => props.theme.colors.lightGrey6};
  height: 56px;
  display: flex;
  justify-content: space-between;
`;

const HeaderContents = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
`;

const LogoBox = styled.div`
  cursor: url(${cursorIcon}), pointer;
  width: 250px;
  height: 100%;
  margin-left: 88px;
  margin-bottom: 8px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    filter: drop-shadow(-1.5px 0px 0px ${(props) => props.theme.colors.darkGrey5});
    -webkit-filter: drop-shadow(-1.5px 0px 0px ${(props) => props.theme.colors.darkGrey5});
  }

  span {
    font-family: ${(props) => props.theme.font.joystick};
    font-size: 24px;
    background-image: linear-gradient(
      0deg,
      ${(props) => props.theme.colors.lightGrey5} 50%,
      ${(props) => props.theme.colors.ivory2} 50%
    );
    background-clip: text;
    -webkit-text-stroke: 1px black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(-1.5px 0px 0px ${(props) => props.theme.colors.darkGrey5})
      drop-shadow(0px 2px 0px ${(props) => props.theme.colors.black4});
    -webkit-filter: drop-shadow(-1.5px 0px 0px ${(props) => props.theme.colors.darkGrey5})
      drop-shadow(0px 2px 0px ${(props) => props.theme.colors.black4});
  }
`;

const ServiceDescription = styled.span`
  color: ${(props) => props.theme.colors.black3};
  font-size: 24px;
`;

export default Header;
