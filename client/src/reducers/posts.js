import {
	GET_POSTS_BY_CATEGORY,
	GET_POSTS,
	GET_POST_DETAILS,
	SAVE_POSTS,
	EDIT_POSTS,
	DELETE_POSTS,
	VOTE_POSTS
} from '../actions/posts';

const initialState = {
	posts: [],
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
		return {
			...state,
			post: {
				...state.post,
				voteScore: action.payload.voteScore
			},
			posts: state.posts.filter(post => {
				if(post.id === action.payload.id)
					post.voteScore = action.payload.voteScore;

				return post;
			})
		};
	default:
		return state;
	}
}
