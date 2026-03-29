import "./create.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../photos.slice";

export default function CreatePhoto() {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageUrl.trim() || !caption.trim()) return;

    dispatch(
      addPhoto({
        id: Date.now(),
        imageUrl,
        caption,
        isFavorite: false,
      })
    );

    setImageUrl("");
    setCaption("");
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h2>Add a dog</h2>

      <div>
        <label htmlFor="imageUrl">Enter your image&apos;s url:</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="e.g., https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="caption">Enter your image&apos;s caption:</label>
        <input
          id="caption"
          type="text"
          placeholder="e.g., Australian Shepherd"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}