import { useState } from 'react';
import Button from '../Button/Button.jsx';
import LayoutModal from '../LayoutModal/LayoutModal.jsx';
import LogInModal from '../LogInModal/LogInModal.jsx';
import css from './UserAuth.module.css';
import SignUpModal from '../SignUpModal/SignUpModal.jsx';

const UserAuth = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogInModal, setIsLogInModal] = useState(false);
  const [isSingUpModal, setIsSingUpModal] = useState(false);

  const openLogInModal = () => {
    setIsLogInModal(true);
    setShowModal(true);
  };

  const openSingUpModal = () => {
    setIsSingUpModal(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsSingUpModal(false);
    setIsLogInModal(false);
  };

  return (
    <div className={css.btnWrapper}>
      <Button onClick={openLogInModal}>Log In</Button>
      <Button onClick={openSingUpModal} className={css.brnRegistration}>
        Registration
      </Button>
      <LayoutModal modalIsOpen={showModal} closeModal={closeModal}>
        {isLogInModal && <LogInModal closeModal={closeModal} />}
        {isSingUpModal && <SignUpModal closeModal={closeModal} />}
      </LayoutModal>
    </div>
  );
};

export default UserAuth;
