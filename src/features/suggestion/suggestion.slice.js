import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSuggestion = createAsyncThunk(
  "suggestion/fetchSuggestion",
  async () => {
    const response = await fetch("http://localhost:3004/api/suggestion");
    return await response.json();
  }
);

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {
    suggestion: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestion.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSuggestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suggestion = action.payload;
      })
      .addCase(fetchSuggestion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectSuggestion = (state) => state.suggestion;

export default suggestionSlice.reducer;