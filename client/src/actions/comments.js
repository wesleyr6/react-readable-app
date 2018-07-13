import { APIResquest } from '../utils/API';

export const GET_COMMENTS = 'GET_COMMENTS';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';

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

export function addComments(data) {
	return dispatch => {
		APIResquest({
			uri: 'comments',
			method: 'POST',
			data
		}).then(res => {
			dispatch({ type: SAVE_COMMENTS, payload: res });
			dispatch({ type: GET_COMMENTS, payload: [res] });
		});
	};
}
