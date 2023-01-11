import styled from 'styled-components';

interface LayoutProps {
  children?: React.ReactNode;
  height: number;
  width: number;
  main?: boolean;
  header?: string;
}

const Layout = ({ main, height, width, children, header }: LayoutProps) => {
  return (
    <StyledLayout style={{ height: height + 'px', width: width + 'px' }}>
      <div className="header">
        {main && (
          <>
            <span>Logo</span>
            <button>Login</button>
          </>
        )}
      </div>
      {children}
      {main && <div className="footer" />}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  border: 2px solid white;
  box-shadow: 7px 7px white;
  display: grid;
  .header {
    background-color: white;
    color: black;
    height: 30px;
    justify-content: space-between;
    display: flex;
  }
  .footer {
    background-color: white;
    height: 50px;
    margin-top: auto;
  }
`;
export default Layout;
