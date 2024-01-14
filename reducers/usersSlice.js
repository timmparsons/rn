import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersList: [],
  },
  reducers: {
    addUsers: (state, action) => {
      console.log('here');
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUsers } = usersSlice.actions;

// Selectors
export const selectUsersList = (state) => state.users.usersList;

export default usersSlice.reducer;
