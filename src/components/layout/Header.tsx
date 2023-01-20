import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Header = ({ page, children }: { page?: string; children?: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <LogoBox page={page} onClick={() => page !== 'ROOM' && navigate('/')}>
        LOG0
      </LogoBox>
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

const LogoBox = styled.div<{ page?: string }>`
  cursor: pointer;
  position: relative;
  color: ${(props) => props.theme.colors.ivory2};
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.lightGrey2};
  width: 250px;
  margin-left: ${(props) => (props.page === 'ROOM' ? '56px' : '150px')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
