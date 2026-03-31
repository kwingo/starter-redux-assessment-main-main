import "./list.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removePhoto,
  toggleFavorite,
  editPhotoCaption,
  selectFilteredPhotos,
} from "../photos.slice";

function PhotosList() {
  const dispatch = useDispatch();
  const photos = useSelector(selectFilteredPhotos);

  const handleDelete = (id) => {
    dispatch(removePhoto(id));
  };

  const handleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleEditCaption = (id, currentCaption) => {
    const newCaption = window.prompt("Enter a new caption:", currentCaption);

    if (newCaption === null) {
      return;
    }

    if (newCaption.trim() === "") {
      window.alert("Caption cannot be empty");
      return;
    }

    dispatch(
      editPhotoCaption({
        id,
        caption: newCaption.trim(),
      })
    );
  };

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id} className="photo-card">
          <img
            className="photo-image"
            alt={photo.caption}
            src={photo.imageUrl}
          />

          <p className="photo-caption">{photo.caption}</p>

          <div className="photo-actions">
            <button
              data-testid={`${photo.id}-delete-button`}
              onClick={() => handleDelete(photo.id)}
            >
              Delete
            </button>

            <button
              data-testid={`${photo.id}-favorite-button`}
              onClick={() => handleFavorite(photo.id)}
            >
              {photo.favorite ? "Unfavorite" : "Favorite"}
            </button>

            <button
              data-testid={`${photo.id}-edit-button`}
              onClick={() => handleEditCaption(photo.id, photo.caption)}
            >
              Edit Caption
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PhotosList;