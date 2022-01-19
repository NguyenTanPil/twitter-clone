import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  email: '',
  avatar: '',
  joined: '',
  background: '',
  bio: '',
  location: '',
  website: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginDetail(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.joined = action.payload.joined;
      state.background = action.payload.background;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.website = action.payload.website;
    },
    setSignOutState(state) {
      state.id = '';
      state.name = '';
      state.email = '';
      state.avatar = '';
      state.joined = '';
      state.background = '';
      state.bio = '';
      state.location = '';
      state.website = '';
    },
  },
});

export const { setSignOutState, setLoginDetail } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
