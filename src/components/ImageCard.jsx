import styles from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className={styles.galleryImgBox} onClick={onClick}>
      <img className={styles.galleryImage} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
