import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredPhotos,
  removePhoto,
  toggleFavorite,
  editPhotoCaption,
} from "../photos.slice";

export default function PhotosList() {
  const photos = useSelector(selectFilteredPhotos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removePhoto(id));
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleEditCaption = (id) => {
    const newCaption = prompt("Enter new caption:");

    if (newCaption && newCaption.trim() !== "") {
      dispatch(editPhotoCaption({ id, newCaption }));
    }
  };

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.imageUrl} alt={photo.caption} width="250" />
          <p>{photo.caption}</p>

          <button onClick={() => handleDelete(photo.id)}>Delete</button>

          <button onClick={() => handleToggleFavorite(photo.id)}>
            {photo.isFavorite ? "Favorited" : "Favorite"}
          </button>

          <button onClick={() => handleEditCaption(photo.id)}>
            Edit Caption
          </button>
        </div>
      ))}
    </div>
  );
}