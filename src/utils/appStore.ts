import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { feedSlice } from "./feedSlice";
export const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    feed: feedSlice.reducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch;
