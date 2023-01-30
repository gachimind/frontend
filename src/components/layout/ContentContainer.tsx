import styled from 'styled-components';

import ThreeLightsIcon from '@assets/svg_threeLightsIcon.svg';

interface ContentContainerProps {
  title: string;
  children?: React.ReactNode;
}

const ContentContainer = ({ title, children }: ContentContainerProps) => {
  return (
    <ContentContainerLayout>
      <HeaderIcon src={ThreeLightsIcon} />
      <TitleBox>{title}</TitleBox>
      {children}
    </ContentContainerLayout>
  );
};

const ContentContainerLayout = styled.div`
  position: relative;
  border: ${(props) => props.theme.borders.normalIvory};
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow1};
`;

const TitleBox = styled.div`
  color: ${(props) => props.theme.colors.darkGrey2};
  font-family: ${(props) => props.theme.font.joystick};
  font-size: 20px;
  text-shadow: ${(props) => props.theme.textShadow.textShadow3};
  background-color: ${(props) => props.theme.colors.ivory1};
  box-shadow: 2px 0px ${(props) => props.theme.colors.ivory1}, -2px -2px ${(props) => props.theme.colors.ivory1};
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderIcon = styled.img`
  position: absolute;
  width: 61px;
  height: 15px;
  margin-top: 11px;
  margin-left: 24px;
`;

export default ContentContainer;
