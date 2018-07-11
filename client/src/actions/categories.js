import { APIResquest } from '../utils/API';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export function loadCategories() {
	return dispatch => {
		APIResquest({
			uri: 'categories',
			method: 'GET'
		}).then(res => {
			dispatch({ type: GET_CATEGORIES, payload: res.categories });
		});
	};
}
