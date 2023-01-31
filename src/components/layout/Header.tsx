import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import logoIcon from '@assets/png_logoIcon.png';
import cursorIcon from '@assets/svg_cursorIcon.svg';
import worldIcon from '@assets/svg_worldIcon.svg';
import { useAppSelector } from '@redux/hooks';

import LoginModal from '@components/home/LoginModal';
import LogoutModal from '@components/home/LogoutModal';

const Header = ({ page }: { page?: string }) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const accessToken = sessionStorage.getItem('accessToken');

  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState<boolean>(false);
  return (
    <HeaderLayout>
      <HeaderContents>
        <LogoBox id="service-name" onClick={() => page !== 'ROOM' && navigate('/')}>
          <img src={logoIcon} />
          <span>GACHIMIND</span>
        </LogoBox>
        <ServiceDescription>CODING INTERVIEW GAME *** 2023 ***</ServiceDescription>
      </HeaderContents>
      {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}
      {logoutModalVisible && <LogoutModal visible={logoutModalVisible} onClose={() => setLogoutModalVisible(false)} />}
      {!accessToken ? (
        <button className="login-button" onClick={() => setLoginModalVisible(true)}>
          <img src={worldIcon} />
          LOGIN
        </button>
      ) : (
        <button className="nickname-button" onClick={() => setLogoutModalVisible(true)}>
          {user?.nickname}
        </button>
      )}
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

  button {
    cursor: url(${cursorIcon}), pointer;
    color: ${(props) => props.theme.colors.darkGrey2};
    font-size: 20px;
    background-color: transparent;
    gap: 16px;
    display: flex;
    align-items: center;
  }

  .login-button {
    font-family: ${(props) => props.theme.font.joystick};
    margin-right: 150px;
  }

  .nickname-button {
    margin-right: 112px;
  }
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
