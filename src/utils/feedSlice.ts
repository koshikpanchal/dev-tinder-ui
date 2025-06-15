import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from "./userSlice";

export const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed(_state, action) {
      return action.payload;
    },
    removeFeed() {
      null;
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;

export const getFeed = (state: { feed: UserState[] }) => state.feed;
export default feedSlice.reducer;
