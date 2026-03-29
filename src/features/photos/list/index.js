import "./list.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredPhotos,
  removePhoto,
  toggleFavorite,
  editPhotoCaption,
} from "../photos.slice";

export default function PhotosList() {
  const dispatch = useDispatch();
  const photos = useSelector(selectFilteredPhotos);

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
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <img src={photo.imageUrl} alt={photo.caption} />
          <p>{photo.caption}</p>

          <div className="photo-actions">
            <button onClick={() => handleDelete(photo.id)}>Delete</button>
            <button onClick={() => handleToggleFavorite(photo.id)}>
              {photo.isFavorite ? "Favorited" : "Favorite"}
            </button>
            <button onClick={() => handleEditCaption(photo.id)}>
              Edit Caption
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}