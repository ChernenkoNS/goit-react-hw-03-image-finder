import PropTypes from "prop-types";
import css from '../ImageGalleryItem/ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ item, openModal }) => {
  return (
    <li className={css.ImageGalleryItem}
      onClick={() => {
        openModal(item.largeImageURL);
      }}
    >
      <img className={css.ImageGalleryItemImage} src={item.webformatURL} alt={item.tags} />
    </li>
  );
};




ImageGalleryItem.propTypes = {
  item:  PropTypes.object,
  openModal:PropTypes.func.isRequired
};
