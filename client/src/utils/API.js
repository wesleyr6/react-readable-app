const port = process.env.PORT || 3001;
const API  = process.env.ORIGIN || `http://localhost:${port}`;

// Generate a unique token on the backend server.
let token = localStorage.token;
if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	'Accept': 'application/json',
	'Authorization': token
};

export const APIResquest = (config) => {
	if(config.method === 'POST') {
		return fetch(`${API}/${config.uri}`, {
			method: config.method,
			headers: {
				...headers,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ ...config.data })
		})
			.then(res => res.json())
			.then(data => data);
	} else {
		return fetch(`${API}/${config.uri}`, {
			method: config.method,
			headers: {
				...headers,
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => data);
	}
};
