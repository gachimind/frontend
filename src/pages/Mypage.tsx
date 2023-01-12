import styled from 'styled-components';

import Container from '@components/common/Container';
import UserInfo from '@components/home/UserInfo';

// TODO: 마이페이지 디자인 완성 시 다시 작업하기
const Mypage = () => {
  return (
    <Container page="mypage" containerType="template" width={84.63541666666667} height={86.8945868945869}>
      <ComponentsBox>
        <Container title="PROFILE" height={67.22689075630252} width={17.578125}>
          <UserInfo />
        </Container>
        <Container title="GROWTH TOWER" height={67.22689075630252} width={17.578125} />
        <Container title="KEYWORD LIST" height={67.22689075630252} width={22.786458333333332} />
      </ComponentsBox>
    </Container>
  );
};

const ComponentsBox = styled.div`
  margin-top: 10px;
  gap: 40px;
  display: flex;
  justify-content: center;
`;

export default Mypage;
