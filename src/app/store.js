import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../features/photos/photos.slice";
import searchReducer from "../features/search/search.slice";
import suggestionReducer from "../features/suggestion/suggestion.slice";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    search: searchReducer,
    suggestion: suggestionReducer,
  },
});