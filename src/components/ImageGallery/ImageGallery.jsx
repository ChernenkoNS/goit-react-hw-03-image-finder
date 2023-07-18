import PropTypes from "prop-types";
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css'
export const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={css.imageGallery}>
      {data.map(item => (
        <ImageGalleryItem
          key={item.id}
          openModal={openModal}
          item={item} 
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  data:PropTypes.array,
  openModal:PropTypes.func.isRequired
};
