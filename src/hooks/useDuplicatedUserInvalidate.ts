import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@redux/hooks';
import { logout } from '@redux/modules/userSlice';
import { alertToast } from '@utils/toast';

const useDuplicatedUserInvalidate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const invalidate = () => {
    alertToast('다른 기기 또는 브라우저에서 로그인하여 자동으로 로그아웃 되었습니다.', 'info', {
      hideProgressBar: true,
      autoClose: false,
    });
    dispatch(logout());
    navigate('/', { replace: true });
  };

  return { invalidate };
};

export default useDuplicatedUserInvalidate;
