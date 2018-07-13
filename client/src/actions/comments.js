import { APIResquest } from '../utils/API';
import { loadPostDetails } from './posts';

export const GET_COMMENTS = 'GET_COMMENTS';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const VOTE_COMMENTS = 'VOTE_COMMENTS';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';

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
			dispatch(loadPostDetails(data.parentId));
		});
	};
}

export function deleteComments(id) {
	return dispatch => {
		APIResquest({
			uri: `comments/${id}`,
			method: 'DELETE',
			data: id
		}).then(res => {
			dispatch({ type: DELETE_COMMENTS, payload: res });
			dispatch(loadPostDetails(res.parentId));
		});
	};
}

export function voteComments(id, option) {
	return dispatch => {
		APIResquest({
			uri: `comments/${id}`,
			method: 'POST',
			data: option
		}).then(res => {
			dispatch({ type: VOTE_COMMENTS, payload: res });
		});
	};
}
