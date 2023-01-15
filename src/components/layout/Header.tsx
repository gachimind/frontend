import styled from 'styled-components';

const Header = ({ page, children }: { page?: string; children?: React.ReactNode }) => {
  return (
    <HeaderLayout>
      <LogoBox page={page}>LOG0</LogoBox>
      {children}
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.outline};
  height: 56px;
  display: flex;
  justify-content: space-between;
`;

const LogoBox = styled.div<{ page?: string }>`
  position: relative;
  color: ${(props) => props.theme.colors.logo};
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.footer};
  width: 250px;
  height: 100%;
  margin-left: ${(props) => (props.page === 'ROOM' ? '50px' : '150px')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
