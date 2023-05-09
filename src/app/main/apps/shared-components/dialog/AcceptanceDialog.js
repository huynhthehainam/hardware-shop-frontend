import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { closeDialog } from 'app/store/fuse/dialogSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

export default (props) => {
  const { title, content, onAccept } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeDialog())} color="error">
          {t('CANCEL_BUTTON')}
        </Button>
        <Button
          onClick={() => {
            onAccept();
          }}
          color="primary"
        >
          {t('OK_BUTTON')}
        </Button>
      </DialogActions>
    </>
  );
};
