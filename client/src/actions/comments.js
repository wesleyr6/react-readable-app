import { APIResquest } from '../utils/API';

export const GET_COMMENTS = 'GET_COMMENTS';

export function loadComments(postID) {
	return dispatch => {
		APIResquest({
			uri: `posts/${postID}/comments`,
			method: 'GET'
		}).then(res => {
			dispatch({ type: GET_COMMENTS, payload: res });
		});
	};
}
