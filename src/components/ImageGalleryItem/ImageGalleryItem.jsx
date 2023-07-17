export const ImageGalleryItem = ({ item, openModal }) => {
  return (
    <li
      onClick={() => {
        openModal(item.largeImageURL);
      }}
    >
      <img src={item.previewURL} alt={item.tags} />
    </li>
  );
};
