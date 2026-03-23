import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredPhotos,
  toggleFavorite,
  editPhotoCaption,
} from "../../photos/photos.slice";

export default function PhotosList() {
  const dispatch = useDispatch();
  const photos = useSelector(selectFilteredPhotos);

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.caption} />
          <p>{photo.caption}</p>

          <button onClick={() => dispatch(toggleFavorite(photo.id))}>
            {photo.isFavorite ? "Unfavorite" : "Favorite"}
          </button>

          <button
            onClick={() =>
              dispatch(
                editPhotoCaption({
                  id: photo.id,
                  caption: "Updated caption",
                })
              )
            }
          >
            Edit Caption
          </button>
        </div>
      ))}
    </div>
  );
}