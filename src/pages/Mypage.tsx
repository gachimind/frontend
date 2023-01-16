import UserInfo from '@components/home/UserInfo';
import ContentBox from '@components/layout/ContentBox';
import MyPageLayout from '@components/layout/mypage/MyPageLayout';
import Keyword from '@components/mypage/Keyword';

const Mypage = () => {
  return (
    <MyPageLayout>
      <ContentBox title="SCORE">
        <UserInfo />
      </ContentBox>
      <ContentBox title="GROWTH TOWER"></ContentBox>
      <ContentBox title="KEYWORD LIST">
        <Keyword />
      </ContentBox>
    </MyPageLayout>
  );
};

export default Mypage;
