import { createNotification } from 'app/fuse-layouts/shared-components/notificationPanel/store/dataSlice';
import { useCallback } from 'react';

const { useDispatch } = require('react-redux');

function useNotification() {
  const dispatch = useDispatch();
  const showNotification = useCallback(
    (obj) => {
      console.log('show notification', obj);
      dispatch(createNotification(obj));
    },
    [dispatch]
  );
  return { showNotification };
}
export default useNotification;
