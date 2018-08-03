import {
	GET_POSTS_BY_CATEGORY,
	GET_POSTS,
	GET_POST_DETAILS,
	SAVE_POSTS,
	EDIT_POSTS,
	DELETE_POSTS,
	VOTE_POSTS,
	ORDER_POSTS
} from '../actions/posts';

const initialState = {
	posts: [],
	postsFilter: 'voteScore',
	post: {}
};

export default function (state = initialState, action = {}) {
	switch(action.type) {
	case GET_POSTS:
		return {
			...state,
			posts: action.payload
		};
	case GET_POSTS_BY_CATEGORY:
		return {
			...state,
			posts: action.payload
		};
	case GET_POST_DETAILS:
		return {
			...state,
			post: action.payload
		};
	case SAVE_POSTS:
		return {
			...state,
			posts: state.posts.concat([action.payload])
		};
	case EDIT_POSTS:
		return {
			...state,
			post: action.payload
		};
	case DELETE_POSTS:
		return {
			...state,
			posts: state.posts.filter(post => post.id !== action.payload.id)
		};
	case VOTE_POSTS:
		state.post.voteScore = action.payload.voteScore;

		return {
			...state,
			post: state.post
		};
	case ORDER_POSTS:
		return {
			...state,
			postsFilter: action.payload
		};
	default:
		return state;
	}
}
