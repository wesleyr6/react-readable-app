import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePosts } from '../../../actions/posts';

import './index.sass';

class PostsList extends React.Component {
	render() {
		const { posts } = this.props;

		return(
			<div>
				<table>
					<thead>
						<tr>
							<th width="50%">Title</th>
							<th width="10%">Author</th>
							<th width="10%">Categories</th>
							<th width="10%" className="text-center">Vote score</th>
							<th width="20%"></th>
						</tr>
					</thead>

					<tbody>
						{
							posts && posts.length ? (
								posts.map(post => {
									return(
										<tr key={post.id}>
											<td>
												<Link to={`/posts/${post.id}`}>{post.title}</Link>
											</td>
											<td>{post.author}</td>
											<td>{post.category}</td>
											<td className="text-center">{post.voteScore}</td>
											<td width="20%" className="text-right">
												<Link to={`/posts/${post.id}/edit`} className="button">Edit</Link>
												<button type="button" className="red-theme" onClick={() => this.props.deletePosts(post.id)}>Delete</button>
											</td>
										</tr>
									);
								})
							) : (
								<tr>
									<td colSpan="5">No posts found</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		);
	}
}

PostsList.propTypes = {
	posts: PropTypes.array.isRequired,
	deletePosts: PropTypes.func.isRequired
};

export default connect(null, { deletePosts })(PostsList);
