import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../photos.slice";

export default function CreatePhoto() {
  const dispatch = useDispatch();
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!caption.trim() || !imageUrl.trim()) {
      return;
    }

    const formData = {
      id: Date.now(),
      caption,
      imageUrl,
      isFavorite: false,
    };

    dispatch(addPhoto(formData));
    setCaption("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Photo</h2>
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Add Photo</button>
    </form>
  );
}