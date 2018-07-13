import { GET_COMMENTS, SAVE_COMMENTS } from '../actions/comments';

this.state = {
	comments: []
};

export default function (state = {}, action = {}) {
	switch(action.type) {
	case GET_COMMENTS:
		return {
			...state,
			comments: action.payload
		};
	case SAVE_COMMENTS:
		return {
			...state,
			comments: state.comments.concat([action.payload])
		};
	default:
		return state;
	}
}
