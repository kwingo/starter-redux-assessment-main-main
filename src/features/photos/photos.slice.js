import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhoto(state, action) {
      state.photos.push(action.payload);
    },
    removePhoto(state, action) {
      state.photos = state.photos.filter(
        (photo) => photo.id !== action.payload
      );
    },
    toggleFavorite(state, action) {
      const photo = state.photos.find((photo) => photo.id === action.payload);
      if (photo) {
        photo.isFavorite = !photo.isFavorite;
      }
    },
    editPhotoCaption(state, action) {
      const { id, caption } = action.payload;
      const photo = state.photos.find((photo) => photo.id === id);
      if (photo) {
        photo.caption = caption;
      }
    },
  },
});

export const {
  addPhoto,
  removePhoto,
  toggleFavorite,
  editPhotoCaption,
} = photosSlice.actions;

export const selectPhotos = (state) => state.photos.photos;

export const selectFilteredPhotos = (state) => {
  const photos = state.photos.photos;
  const term = state.search.term || "";

  return photos.filter((photo) =>
    photo.caption.toLowerCase().includes(term.toLowerCase())
  );
};

export default photosSlice.reducer;