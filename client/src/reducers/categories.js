import { GET_CATEGORIES } from '../actions/categories';

export default function (state = [], action = {}) {
	switch(action.type) {
	case GET_CATEGORIES:
		return action.payload;
	default:
		return state;
	}
}
