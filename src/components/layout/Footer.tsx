import styled from 'styled-components';

import footerImage from '@assets/svg_footerImage.svg';

const Footer = ({ children }: { children?: React.ReactNode }) => {
  return <FooterLayout>{children}</FooterLayout>;
};

const FooterLayout = styled.div`
  background-image: url(${footerImage});
  background-size: contain;
  height: 80px;
`;

export default Footer;
