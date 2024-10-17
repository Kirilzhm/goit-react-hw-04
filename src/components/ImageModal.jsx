import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const ImageModal = ({ isOpen, onRequestClose, image }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      </Modal>
    );
  };

  export default ImageModal;