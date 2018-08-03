import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return(
		<div className="wrapper">
			<h1>404 - Page not found</h1>
			<p>We can not seem to find the page you are looking for.</p>
			<Link className="button blue-theme margin-top" to="/">Go back to Home</Link>
		</div>
	);
};

export default NotFoundPage;
