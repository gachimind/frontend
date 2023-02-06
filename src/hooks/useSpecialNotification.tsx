import { useEffect, useState } from 'react';

import axios from 'axios';

interface NotificationType {
  hasAlert: string;
  contents: string;
}

const useSpecialNotification = () => {
  const lambdaNotificationURL = process.env.REACT_APP_LAMBDA_NOTI;
  const [hasNotification, setHasNotification] = useState<boolean>(false);
  const [contents, setContents] = useState<string>('');

  useEffect(() => {
    console.log(lambdaNotificationURL);
    if (!lambdaNotificationURL) {
      return;
    }
    (async () => {
      const notificationResult = await axios.get('https://au12xtunpb.execute-api.ap-northeast-2.amazonaws.com/prod');
      const data = notificationResult.data.body as NotificationType;
      if (data.hasAlert === 'true') {
        setHasNotification(true);
        setContents(data.contents);
      }
    })();
  }, []);

  function closeNotification() {
    setHasNotification(false);
  }

  return { hasNotification, contents, closeNotification };
};

export default useSpecialNotification;
