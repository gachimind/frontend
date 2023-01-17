import styled from 'styled-components';

import headerIcon from '@assets/headerIcon.svg';

const ContentContainer = ({ title, children }: { title: string; children?: React.ReactNode }) => {
  return (
    <RoomContentLayout>
      {title !== 'TIMER' && title !== 'CHATTING' && title !== 'GROWTH TOWER' && <HeaderIcon src={headerIcon} />}
      <Title>{title}</Title>
      {children}
    </RoomContentLayout>
  );
};

const RoomContentLayout = styled.div`
  position: relative;
  border: ${(props) => props.theme.borders.card};
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow};
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.ivory1};
  height: 39px;
  display: flex;
  justify-content: center;
`;

const HeaderIcon = styled.img`
  position: absolute;
  width: 61px;
  height: 15px;
  margin-top: 10px;
  margin-left: 20px;
`;

export default ContentContainer;
