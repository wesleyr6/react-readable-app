import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import postsReducer from './posts';
import commentsReducer from './comments';

export default combineReducers({
	categoriesReducer,
	postsReducer,
	commentsReducer
});
