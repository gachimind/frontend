import { useEffect, useState } from 'react';

import axios from 'axios';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setSpecialNotificationShown } from '@redux/modules/notificationSlice';

interface NotificationType {
  hasAlert: string;
  contents: string;
  key: string;
}

const useSpecialNotification = () => {
  const dispatch = useAppDispatch();
  const { isSpecialNotificationShown } = useAppSelector((state) => state.notification);
  const [hasNotification, setHasNotification] = useState<boolean>(false);
  const [contents, setContents] = useState<string>('');
  const [key, setKey] = useState<string>('');
  const lambdaNotificationURL = process.env.REACT_APP_LAMBDA_NOTI;
  useEffect(() => {
    if (!lambdaNotificationURL || isSpecialNotificationShown) {
      return;
    }
    (async () => {
      const notificationResult = await axios.get(lambdaNotificationURL);
      const data = notificationResult.data.body as NotificationType;
      if (data.hasAlert === 'true') {
        setHasNotification(true);
        setContents(data.contents);
        setKey(data.key);
        dispatch(setSpecialNotificationShown());
      }
    })();
  }, []);

  function closeNotification() {
    setHasNotification(false);
  }

  return { hasNotification, contents, closeNotification, key };
};

export default useSpecialNotification;
