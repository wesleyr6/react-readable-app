import { APIResquest } from '../utils/API';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST_DETAILS = 'GET_POST_DETAILS';
export const EDIT_POSTS = 'EDIT_POSTS';
export const SAVE_POSTS = 'SAVE_POSTS';
export const DELETE_POSTS = 'DELETE_POSTS';
export const VOTE_POSTS = 'VOTE_POSTS';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const ORDER_POSTS = 'ORDER_POSTS';

export function addPosts(data) {
	return dispatch => {
		APIResquest({
			uri: 'posts',
			method: 'POST',
			data
		}).then(res => {
			dispatch({ type: SAVE_POSTS, payload: res });
		});
	};
}

export function deletePosts(id) {
	return dispatch => {
		APIResquest({
			uri: `posts/${id}`,
			method: 'DELETE',
			data: id
		}).then(res => {
			dispatch({ type: DELETE_POSTS, payload: res });
		});
	};
}

export function editPosts(id, data) {
	return dispatch => {
		APIResquest({
			uri: `posts/${id}`,
			method: 'PUT',
			data
		}).then(res => {
			dispatch({ type: EDIT_POSTS, payload: res });
		});
	};
}

export function loadPosts() {
	return dispatch => {
		APIResquest({
			uri: 'posts',
			method: 'GET'
		}).then(res => {
			dispatch({ type: GET_POSTS, payload: res });
		});
	};
}

export function loadPostDetails(postID) {
	return dispatch => {
		APIResquest({
			uri: `posts/${postID}`,
			method: 'GET'
		}).then(res => {
			dispatch({ type: GET_POST_DETAILS, payload: res });
		});
	};
}

export function loadPostsByCategory(cat) {
	return dispatch => {
		APIResquest({
			uri: `${cat}/posts`,
			method: 'GET',
			data: cat
		}).then(res => {
			dispatch({ type: GET_POSTS_BY_CATEGORY, payload: res });
		});
	};
}

export function votePosts(id, option) {
	return dispatch => {
		APIResquest({
			uri: `posts/${id}`,
			method: 'POST',
			data: {option}
		}).then(res => {
			dispatch({ type: VOTE_POSTS, payload: res });
		});
	};
}
