import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  avatar: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginDetail(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
    setSignOutState(state) {
      state.name = '';
      state.email = '';
      state.avatar = '';
    },
  },
});

export const { setSignOutState, setLoginDetail } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
