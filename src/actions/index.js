export const ADD_POST = "ADD_POST";
export const SET_POSTS = "SET_POSTS";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});