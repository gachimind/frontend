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
    right: 60px;
    margin-top: 13px;
    img {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
      border-radius: 20px;
      width: 56px;
      height: 56px;
    }
  }
`;

export default Footer;
