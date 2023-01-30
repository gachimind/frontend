import { useLayoutEffect } from 'react';

import UserInfo from '@components/home/UserInfo';
import ContentContainer from '@components/layout/ContentContainer';
import MyPageTemplate from '@components/layout/MyPageTemplate';
import Keyword from '@components/mypage/Keyword';

const Mypage = () => {
  useLayoutEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      sessionStorage.clear();
      window.location.replace('/');
    }
  }, []);

  return (
    <MyPageTemplate>
      <ContentContainer title="SCORE">
        <UserInfo mypage={true} />
      </ContentContainer>
      <ContentContainer title="GROWTH TOWER"></ContentContainer>
      <ContentContainer title="KEYWORD LIST">
        <Keyword />
      </ContentContainer>
    </MyPageTemplate>
  );
};

export default Mypage;
