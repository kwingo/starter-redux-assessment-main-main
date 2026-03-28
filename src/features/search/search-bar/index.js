import { useDispatch } from "react-redux";
import { setSearchTerm } from "../search.slice";

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by caption"
        onChange={handleChange}
      />
    </div>
  );
}