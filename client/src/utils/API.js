const port = process.env.PORT || 3001;
export const API = process.env.NODE_ENV === 'production' ? window.origin : `http://localhost:${port}`;

// Generate a unique token on the backend server.
let token = localStorage.token;
if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	'Accept': 'application/json',
	'Authorization': token
};

console.warn('API URL: ', API);

export const APIResquest = (config) => {
	const requestConfig = () => {
		let settings = {};

		if(config.method === 'POST' || config.method === 'PUT') {
			settings = {
				method: config.method,
				headers: {
					...headers,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ ...config.data })
			};
		} else {
			settings = {
				method: config.method,
				headers: {
					...headers,
					'Content-Type': 'application/json'
				}
			};
		}

		return settings;
	};

	return fetch(`${API}/${config.uri}`, requestConfig())
		.then(res => res.json())
		.then(data => data);
};
