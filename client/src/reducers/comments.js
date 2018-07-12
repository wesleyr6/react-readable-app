import { GET_COMMENTS } from '../actions/comments';

export default function (state = [], action = {}) {
	switch(action.type) {
	case GET_COMMENTS:
		return action.payload;
	default:
		return state;
	}
}
