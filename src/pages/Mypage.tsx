import UserInfo from '@components/home/UserInfo';
import ContentBox from '@components/layout/ContentBox';
import MyPageLayout from '@components/layout/mypage/MyPageLayout';

const Mypage = () => {
  return (
    <MyPageLayout>
      <ContentBox title="SCORE">
        <UserInfo />
      </ContentBox>
      <ContentBox title="GROWTH TOWER"></ContentBox>
      <ContentBox title="KEYWORD LIST"></ContentBox>
    </MyPageLayout>
  );
};

export default Mypage;
