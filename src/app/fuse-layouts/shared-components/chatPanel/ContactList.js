import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSignalRMessage } from 'app/store/signalRSlice';
import { openChatPanel } from './store/stateSlice';
import ContactButton from './ContactButton';

const Root = styled(FuseScrollbars)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

function ContactList(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(({ chatPanel }) => chatPanel.contacts.contacts);
  const selectedContactId = useSelector(({ chatPanel }) => chatPanel.contacts.selectedContactId);
  const contactListScroll = useRef(null);

  const handleContactClick = (affectedUserIds) => {
    console.log('handle click', affectedUserIds);
    dispatch(openChatPanel());
    dispatch(
      setSignalRMessage({
        msgType: 'JoinChatSession',
        msg: [affectedUserIds],
      })
    );

    scrollToTop();
  };

  const scrollToTop = () => {
    contactListScroll.current.scrollTop = 0;
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <Root
      className="flex flex-shrink-0 flex-col overflow-y-auto py-8 overscroll-contain"
      ref={contactListScroll}
      option={{ suppressScrollX: true, wheelPropagation: false }}
    >
      {contacts.length > 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col flex-shrink-0"
        >
          {contacts.map((contact, index) => {
            return (
              <motion.div variants={item} key={index}>
                <ContactButton
                  contact={contact}
                  selectedContactId={selectedContactId}
                  onClick={handleContactClick}
                />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </Root>
  );
}

export default memo(ContactList);
