const port = process.env.PORT || 3001;
export const API = process.env.NODE_ENV === 'production' ? window.origin : `http://localhost:${port}`;

// Generate a unique token on the backend server.
let token = localStorage.token;
if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Authorization': token
};

export const APIResquest = (config) => {
	const requestConfig = () => {
		let settings = {
			method: config.method,
			headers: {
				...headers
			}
		};

		if(config.method === 'POST' || config.method === 'PUT') {
			settings.body = JSON.stringify({ ...config.data });
		}

		return settings;
	};

	return fetch(`${API}/api/${config.uri}`, requestConfig())
		.then(res => res.json())
		.then(data => data)
		.catch(err => {console.log(err);});
};
