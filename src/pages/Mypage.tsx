import UserInfo from '@components/home/UserInfo';
import ContentContainer from '@components/layout/ContentContainer';
import MyPageTemplate from '@components/layout/MyPageTemplate';
import Keyword from '@components/mypage/Keyword';

const Mypage = () => {
  return (
    <MyPageTemplate>
      <ContentContainer title="SCORE">
        <UserInfo />
      </ContentContainer>
      <ContentContainer title="GROWTH TOWER"></ContentContainer>
      <ContentContainer title="KEYWORD LIST">
        <Keyword />
      </ContentContainer>
    </MyPageTemplate>
  );
};

export default Mypage;
