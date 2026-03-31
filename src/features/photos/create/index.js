import "./create.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addPhoto } from "../photos.slice";

export default function CreatePhoto() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedImageUrl = imageUrl.trim();
    const trimmedCaption = caption.trim();

    if (!trimmedImageUrl || !trimmedCaption) {
      setError("Both image URL and caption are required.");
      return;
    }

    const isValidUrl = /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(
      trimmedImageUrl
    );

    if (!isValidUrl) {
      setError("Please enter a valid image URL ending in jpg, jpeg, png, webp, or gif.");
      return;
    }

    const duplicatePhoto = photos.some(
      (photo) =>
        photo.imageUrl.toLowerCase() === trimmedImageUrl.toLowerCase() ||
        photo.caption.toLowerCase() === trimmedCaption.toLowerCase()
    );

    if (duplicatePhoto) {
      setError("This photo already exists.");
      return;
    }

    dispatch(
      addPhoto({
        id: uuidv4(),
        imageUrl: trimmedImageUrl,
        caption: trimmedCaption,
        favorite: false,
      })
    );

    setImageUrl("");
    setCaption("");
    setError("");
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h2>Add a dog</h2>

      {error && <p className="form-error">{error}</p>}

      <div>
        <label htmlFor="imageUrl">Enter your image&apos;s url:</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="e.g., https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
            setError("");
          }}
        />
      </div>

      <div>
        <label htmlFor="caption">Enter your image&apos;s caption:</label>
        <input
          id="caption"
          type="text"
          placeholder="e.g., Australian Shepherd"
          value={caption}
          onChange={(e) => {
            setCaption(e.target.value);
            setError("");
          }}
        />
      </div>

      <input
        type="submit"
        value="Submit"
        disabled={!imageUrl.trim() || !caption.trim()}
      />
    </form>
  );
}