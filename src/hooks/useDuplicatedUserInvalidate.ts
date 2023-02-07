import { useNavigate } from 'react-router-dom';

import { useLazyGetLogoutQuery } from '@redux/query/user';
import { alertToast } from '@utils/toast';

const useDuplicatedUserInvalidate = () => {
  const navigate = useNavigate();
  const [logout] = useLazyGetLogoutQuery();

  const invalidate = () => {
    alertToast('다른 기기 또는 브라우저에서 로그인하여 자동으로 로그아웃 되었습니다.', 'info', {
      hideProgressBar: true,
      autoClose: false,
    });
    logout();
    navigate('/', { replace: true });
  };

  return { invalidate };
};

export default useDuplicatedUserInvalidate;
