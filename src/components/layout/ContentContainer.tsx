import styled from 'styled-components';

import ThreeLightsIcon from '@assets/svg_threeLightsIcon.svg';

interface ContentContainerProps {
  lights?: boolean;
  title: string;
  children?: React.ReactNode;
}

const ContentContainer = ({ lights, title, children }: ContentContainerProps) => {
  return (
    <ContentContainerLayout>
      {lights && <HeaderIcon src={ThreeLightsIcon} />}
      <TitleBox>{title}</TitleBox>
      {children}
    </ContentContainerLayout>
  );
};

const ContentContainerLayout = styled.div`
  position: relative;
  border: ${(props) => props.theme.borders.card};
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow};
`;

const TitleBox = styled.div`
  color: ${(props) => props.theme.colors.darkGrey2};
  font-size: 24px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.ivory1};
  height: 39px;
  display: flex;
  justify-content: center;
`;

const HeaderIcon = styled.img`
  position: absolute;
  width: 61px;
  height: 15px;
  margin-top: 11px;
  margin-left: 24px;
`;

export default ContentContainer;
