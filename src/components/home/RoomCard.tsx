import styled from 'styled-components';

const RoomCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GreyBox />
      <RoomCardTopBox />
      <RoomCardMainBox>{children}</RoomCardMainBox>
    </div>
  );
};

const RoomCardTopBox = styled.div`
  position: relative;
  margin-left: 44px;
  width: 88px;
  height: 20px;
  outline: solid 4px ${(props) => props.theme.colors.lightGrey5};
  border: 4px solid white;
  overflow: hidden;
  box-shadow: 7px 7px 0px 6px black;
  border-collapse: collapse;
`;

const GreyBox = styled.div`
  position: absolute;
  margin-left: 44px;
  margin-top: 15px;
  z-index: 999;
  width: 88px;
  height: 12px;
  background-color: ${(props) => props.theme.colors.darkGrey2};
`;

const RoomCardMainBox = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: 260px;
  height: 148px;
  ${(props) => props.theme.borders.roomCardBorder};
  outline: solid 4px ${(props) => props.theme.colors.lightGrey5};
  box-shadow: 7px 7px 0px 6px black;
  border-collapse: collapse;
  overflow: hidden;
  display: flex;
  .secret-room-icon {
    width: 86px;
    height: 86px;
    margin-top: 25px;
    margin-left: -10px;
  }
`;

export default RoomCard;
