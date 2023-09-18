import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getPosts = createAsyncThunk(
  "ewalletSlice/getStartUser",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }
);
const ewalletSlice = createSlice({
  name: "ewalletSlice",
  initialState: {
    cards: [
      {
        name: "Christoffer Wallenberg",
        number: 1234567891011123,
        validThru: "12/22",
        vendor: "SvelteCard",
        ccv: 376,
        active: true,
      },
      {
        name: "Darkwing Duck",
        number: 6666567891011123,
        validThru: "10/22",
        vendor: "DuckCard",
        ccv: 176,
        active: false,
      },
      {
        name: "Fishy Fish",
        number: 1111567891011123,
        validThru: "7/22",
        vendor: "FishCard",
        ccv: 776,
        active: false,
      },
    ],
    activeCard: null,
  },
  reducers: {
    setActiveCard: (state, action) => {
      console.log(action);
      state.activeCard += action.payload;
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
