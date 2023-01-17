import styled from 'styled-components';

const Footer = ({ children }: { children?: React.ReactNode }) => {
  return <FooterLayout>{children}</FooterLayout>;
};

const FooterLayout = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey1};
  height: 80px;
`;

export default Footer;
