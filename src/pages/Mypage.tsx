import { useAppSelector } from '@redux/hooks';

import UserInfo from '@components/home/UserInfo';
import ContentContainer from '@components/layout/ContentContainer';
import MyPageTemplate from '@components/layout/MyPageTemplate';
import Keyword from '@components/mypage/Keyword';

const Mypage = () => {
  const isLogined = useAppSelector((state) => state.user.isLogined);

  !isLogined && window.location.replace('/');
  return (
    <MyPageTemplate>
      <ContentContainer title="SCORE" lights={true}>
        <UserInfo mypage={true} />
      </ContentContainer>
      <ContentContainer title="GROWTH TOWER"></ContentContainer>
      <ContentContainer title="KEYWORD LIST" lights={true}>
        <Keyword />
      </ContentContainer>
    </MyPageTemplate>
  );
};

export default Mypage;
