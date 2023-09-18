import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getPosts = createAsyncThunk("postsSlice/getPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});
const ewalletSlice = createSlice({
  name: "ewalletSlice",
  initialState: { posts: [], status: null, count: 0 },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.count += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "Success!";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = "Rejected";
      });
  },
});

export const { increment } = ewalletSlice.actions;
export default ewalletSlice.reducer;
