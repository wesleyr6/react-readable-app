import React from 'react';
import { Link } from 'react-router-dom';

const PostsFilters = () => {
	return(
		<section className="page-actions flex-mobile">
			<select className="small">
				<option value="date">Date created</option>
				<option value="vote">Vote Score</option>
			</select>

			<Link to="/posts/create" className="button">Create new</Link>
		</section>
	);
};

export default PostsFilters;
