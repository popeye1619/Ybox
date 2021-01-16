import { ADD_POST, setPosts, SET_POSTS } from "../actions/index"

const initialState = {
  posts: []
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return { ...state, posts: [...state.posts, action.payload] }
    }
    case SET_POSTS: {
      return { ...state, posts: action.payload }
    }
    default:
      return state
  }
}

export const loadPosts = () => async (dispatch) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
  dispatch(setPosts(posts))
} 