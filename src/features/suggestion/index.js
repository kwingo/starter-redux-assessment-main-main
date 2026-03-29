import "./suggestion.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggestion, selectSuggestion } from "./suggestion.slice";

export default function Suggestion() {
  const dispatch = useDispatch();
  const { suggestion, isLoading, error } = useSelector(selectSuggestion);

  useEffect(() => {
    dispatch(fetchSuggestion());
  }, [dispatch]);

  return (
    <div className="suggestion-container">
      <h2>Suggestion of the Day</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>Sorry, we&apos;re having trouble loading the suggestion.</p>}

      {suggestion && (
        <>
          <img src={suggestion.imageUrl} alt={suggestion.caption} />
          <p>{suggestion.caption}</p>
        </>
      )}
    </div>
  );
}