import { useEffect } from "react";

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, isClose, imageSrc, imageAlt }) => {
    const handleClose = (e) => {
        if (e.type === 'keydown' && e.key === 'Escape') {
            onClose();
        };
    };
    React.useEffect(() => {
        window.addEventListener('keydown', handleClose);
        return () => window.removeEventListener('keydown', handleClose);
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}>
            <div className={styles.imageWrapper}>
                <img src={imageSrc} alt={imageAlt} className={styles.image} />
            </div>
        </Modal>
    );
};