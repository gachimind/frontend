import styled from 'styled-components';

import footerImage from '@assets/svg_footerImage.svg';
import instagramIcon from '@assets/svg_instagramIcon.svg';

const Footer = ({ children, page }: { children?: React.ReactNode; page?: string }) => {
  return (
    <FooterLayout>
      {page !== 'room' && (
        <button
          className="instagram"
          onClick={() => window.open('https://instagram.com/gachimind?igshid=ZDdkNTZiNTM=')}
        >
          <img src={instagramIcon} />
        </button>
      )}
      {children}
    </FooterLayout>
  );
};

const FooterLayout = styled.div`
  position: relative;
  background-image: url(${footerImage});
  background-size: contain;
  height: 80px;

  .instagram {
    position: absolute;
    background-color: transparent;
    right: 65px;
    margin-top: 8px;
    img {
      width: 65px;
      height: 65px;
    }
  }
`;

export default Footer;
