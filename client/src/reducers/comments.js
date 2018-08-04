import {
	GET_COMMENTS,
	SAVE_COMMENTS,
	VOTE_COMMENTS,
	DELETE_COMMENTS,
	EDIT_COMMENTS
} from '../actions/comments';

this.state = {
	comments: []
};

export default function (state = {}, action) {
	switch(action.type) {
	case GET_COMMENTS:
		return {
			...state,
			comments: action.payload
		};
	case EDIT_COMMENTS:
		return {
			...state,
			comments: state.comments.map(comment => {
				if(comment.id === action.payload.id) {
					return {
						...comment,
						timestamp: action.payload.timestamp,
						body: action.payload.body
					};
				}

				return comment;
			})
		};
	case SAVE_COMMENTS:
		return {
			...state,
			comments: state.comments.concat([action.payload])
		};
	case DELETE_COMMENTS:
		return {
			...state,
			comments: state.comments.filter(comment => comment.id !== action.payload.id)
		};
	case VOTE_COMMENTS:
		return {
			...state,
			comments: state.comments.map(comment => {
				if(comment.id === action.payload.id) {
					return {
						...comment,
						voteScore: action.payload.voteScore
					};
				}

				return comment;
			})
		};
	default:
		return state;
	}
}
