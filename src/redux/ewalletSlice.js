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
        firstName: "Christoffer",
        lastName: "Wallenberg",
        number: 1234567891011123,
        validThru: "12/22",
        vendor: "SvelteCard",
        ccv: 376,
        active: false,
      },
      {
        firstName: "Darkwing",
        lastName: "Duck",
        number: 6666567891011123,
        validThru: "10/22",
        vendor: "DuckCard",
        ccv: 176,
        active: false,
      },
      {
        firstName: "Fishy",
        lastName: "Fish",
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
      const { i, newState } = action.payload;
      state.cards[i].active = newState;
    },
    setAllCardsToInactive: (state, action) => {
      console.log(action);
      state.cards.forEach((card) => {
        card.active = false;
      });
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

export const { setActiveCard, setAllCardsToInactive } = ewalletSlice.actions;
export default ewalletSlice.reducer;
