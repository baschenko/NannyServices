import Modal from 'react-modal';
import css from './LayoutModal.module.css';
import Icon from '../Icon/Icon.jsx';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
    padding: '20px',
    textAlign: 'right',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    overflow: 'scroll',
    zIndex: 2,
  },
};

Modal.setAppElement('#root');

const LayoutModal = ({ modalIsOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal Window"
    >
      <button
        aria-label="Close modal button"
        className={css.closeModalBtn}
        onClick={closeModal}
      >
        <Icon id="icon-close" width={16} height={16} />
      </button>
      <div className={css.modalHeader}>{children}</div>
    </Modal>
  );
};

export default LayoutModal;
