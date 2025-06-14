import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  lastName: string;
  about: string;
  skills: string;
  age: string;
  photoUrl: string;
  gender: string;
  emailId: string;
}

const initialState: UserState | null = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (_state, action) => {
      return action.payload;
    },
    deleteUser: () => {
      return null;
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export const selectUser = (state: { user: UserState | null }) => state.user;

export default userSlice.reducer;
