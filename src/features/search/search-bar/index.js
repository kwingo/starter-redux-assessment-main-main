import "./search-bar.css";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../search.slice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <label htmlFor="search">Search by caption:</label>
      <input
        id="search"
        type="text"
        placeholder="e.g., terrier"
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
}