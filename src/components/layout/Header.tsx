import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Header = ({ page, children }: { page?: string; children?: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <HeaderContents>
        <LogoBox onClick={() => page !== 'ROOM' && navigate('/')}>LOG0</LogoBox>
        <ServiceDescription>CODING INTERVIEW GAME *** 2023 ***</ServiceDescription>
      </HeaderContents>
      {children}
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.ivory1};
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
  cursor: pointer;
  position: relative;
  color: ${(props) => props.theme.colors.ivory2};
  font-family: ${(props) => props.theme.font.ibmPlexMono};
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.lightGrey2};
  width: 250px;
  height: 100%;
  margin-left: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceDescription = styled.span`
  color: ${(props) => props.theme.colors.black3};
  font-size: 24px;
  font-family: ${(props) => props.theme.font.ibmPlexMono};
  font-weight: 500;
`;

export default Header;
