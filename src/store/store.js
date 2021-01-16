import { createStore, applyMiddleware } from 'redux'
import {notesReducer} from '../reducers/postsReducer'
import thunk from 'redux-thunk'

export const store = createStore(notesReducer, applyMiddleware(thunk))