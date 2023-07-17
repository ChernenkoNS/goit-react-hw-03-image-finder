import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data, openModal }) => {
  return (
    <ul>
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
