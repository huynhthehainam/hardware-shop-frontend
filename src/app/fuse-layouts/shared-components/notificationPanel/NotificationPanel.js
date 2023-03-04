import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { useSnackbar } from 'notistack';
import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import NotificationCard from './NotificationCard';
import NotificationTemplate from './NotificationTemplate';
import { getNotifications, dismissNotification, dismissAllNotification } from './store/dataSlice';
import reducer from './store';
import { closeNotificationPanel, toggleNotificationPanel } from './store/stateSlice';
import en from './i18n/en';
import vi from './i18n/vi';

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.background.default,
    width: 320,
  },
}));

let displayed = [];

const storeDisplayed = (id) => {
  displayed = [...displayed, id];
};

const removeDisplayed = (id) => {
  displayed = [...displayed.filter((key) => id !== key)];
};

function NotificationPanel(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector(({ notificationPanel }) => notificationPanel.state);
  const notifications = useSelector(
    ({ notificationPanel }) => notificationPanel.data.notifications
  );

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  useEffect(() => {
    notifications.forEach((item) => {
      const { id: key, message, options = {}, dismissed = false } = item;

      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key);
        return;
      }
      // do nothing if snackbar is already displayed
      if (displayed.includes(key)) {
        return;
      }

      // display snackbar using notistack
      enqueueSnackbar(message, {
        key,
        ...options,
        // autoHideDuration: 3000,
        content: () => (
          <NotificationTemplate
            item={item}
            onClose={() => {
              closeSnackbar(key);
              dispatch(dismissNotification(key));
            }}
          />
        ),
        onClose: (event, reason, myKey) => {
          if (options.onClose) {
            options.onClose(event, reason, myKey);
          }
        },
        onExited: (event, myKey) => {},
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(key);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  useEffect(() => {
    if (state) {
      dispatch(closeNotificationPanel());
    }
    // eslint-disable-next-line
	}, [location, dispatch]);

  function handleClose() {
    dispatch(closeNotificationPanel());
  }

  function handleDismiss(id) {
    dispatch(dismissNotification(id));
  }
  function handleDismissAll() {
    dispatch(dismissAllNotification());
  }

  const { t } = useTranslation('notificationPanel');

  return (
    <StyledSwipeableDrawer
      open={state}
      anchor="right"
      onOpen={(ev) => {}}
      onClose={(ev) => dispatch(toggleNotificationPanel())}
      disableSwipeToOpen
    >
      <IconButton className="m-4 absolute top-0 right-0 z-999" onClick={handleClose} size="large">
        <Icon color="action">close</Icon>
      </IconButton>
      {notifications.length > 0 ? (
        <FuseScrollbars className="p-16">
          <div className="flex flex-col">
            <div className="flex justify-between items-end pt-136 mb-36">
              <Typography className="text-28 font-semibold leading-none">
                {t('NOTIFICATIONS_HEADER')}
              </Typography>
              <Typography
                className="text-12 underline cursor-pointer"
                color="secondary"
                onClick={handleDismissAll}
              >
                {t('DISMISS_ALL_BUTTON')}
              </Typography>
            </div>
            {notifications.map((item) => (
              <NotificationCard
                key={item.id}
                className="mb-16"
                item={item}
                onClose={handleDismiss}
              />
            ))}
          </div>
        </FuseScrollbars>
      ) : (
        <div className="flex flex-1 items-center justify-center p-16">
          <Typography className="text-24 text-center" color="textSecondary">
            {t('NO_NOTIFICATION_FOR_NOW')}
          </Typography>
        </div>
      )}
    </StyledSwipeableDrawer>
  );
}

i18next.addResourceBundle('en', 'notificationPanel', en);
i18next.addResourceBundle('vi', 'notificationPanel', vi);

export default withReducer('notificationPanel', reducer)(memo(NotificationPanel));
