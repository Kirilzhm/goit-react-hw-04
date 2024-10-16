import styles from "./ImageCard.module.css"
const ImageCard = ({ src, alt }) => {
    return (
        <div className="styles.gallery-img-box">
            <img src={src} alt={alt} />
        </div>
    );
};

export default ImageCard