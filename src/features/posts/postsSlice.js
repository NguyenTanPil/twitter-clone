import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload.posts;
    },
    addPost(state, action) {
      state.posts.unshift(action.payload.post);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
