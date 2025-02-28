import Modal from 'react-modal';
import css from './ImageModal.module.css';
import Icon from '../Icon/Icon.jsx';

const customStyles = {
  content: {
    top: '20px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    overflow: 'scroll',
    zIndex: 2,
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, src }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.modalHeader}>
        <button
          aria-label="Close modal button"
          className={css.closeModalBtn}
          onClick={closeModal}
        >
          <Icon id="icon-close" width={14} height={14} />
        </button>
      </div>
      <img src={src} />
    </Modal>
  );
};

export default ImageModal;
