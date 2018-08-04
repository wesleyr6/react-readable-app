import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { OrderBy } from '../../../helpers/';
import { deletePosts } from '../../../actions/posts';
import { ConvertToDate } from '../../../helpers/';
import VoteScore from '../../VoteScore/';
import { orderPosts } from '../../../actions/posts';

import './index.sass';

export class PostsList extends React.Component {
	render() {
		const { posts, postsFilter } = this.props;

		return(
			<div>
				<section className="page-actions flex-mobile">
					<select className="small" onChange={(e) => orderPosts(e.target.value)}>
						<option value="voteScore">Vote Score</option>
						<option value="timestamp">Date created</option>
					</select>

					<Link to="/create" className="button">Create new</Link>
				</section>

				<table>
					<thead>
						<tr>
							<th width="30%">Title</th>
							<th width="10%">Author</th>
							<th width="10%">Category</th>
							<th width="10%" className="text-center">Vote score</th>
							<th width="10%" className="text-center"><i className="icon-comments" /></th>
							<th width="10%" className="text-center">Date Created</th>
							<th width="20%"></th>
						</tr>
					</thead>

					<tbody>
						{
							posts && posts.length ? (
								OrderBy(posts, postsFilter).map(post => {
									return(
										<tr key={post.id}>
											<td>{post.title}</td>
											<td>{post.author}</td>
											<td>{post.category}</td>
											<td className="text-center">
												<VoteScore voteScoreId={`${post.id}`} voteScoreType="post" voteScoreResult={post.voteScore} />
											</td>
											<td className="text-center">{post.commentCount}</td>
											<td className="text-center">{ConvertToDate(post.timestamp)}</td>
											<td width="20%" className="text-right">
												<Link to={`/${post.category}/${post.id}/edit`} className="button">Edit</Link>
												<button type="button" className="red-theme" onClick={() => this.props.deletePosts(post.id)}>Delete</button>
												<Link to={`/${post.category}/${post.id}`} className="button blue-theme">Details</Link>
											</td>
										</tr>
									);
								})
							) : (
								<tr>
									<td colSpan="7">No posts found</td>
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
	postsFilter: PropTypes.string,
	deletePosts: PropTypes.func.isRequired,
	orderPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		postsFilter: state.postsReducer.postsFilter
	};
};

export default connect(mapStateToProps, { deletePosts, orderPosts })(PostsList);
