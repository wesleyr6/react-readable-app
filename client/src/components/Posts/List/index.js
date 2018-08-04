import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { OrderBy } from '../../../helpers/';
import { deletePosts } from '../../../actions/posts';
import { ConvertToDate } from '../../../helpers/';
import VoteScore from '../../VoteScore/';

import './index.sass';

export class PostsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allPosts: [],
			order: 'voteScore'
		};

		this.onHandleOrderPosts = this.onHandleOrderPosts.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (this.props.posts !== prevProps.posts) {
			const orderPosts = OrderBy(this.props.posts, this.state.order);

			this.setState({
				allPosts: orderPosts
			});
		}
	}

	onHandleDelete(postID) {
		const { deletePosts } = this.props;

		if (window.confirm('Do you really want to delete this post?')) {
			deletePosts(postID);
		}
	}

	onHandleOrderPosts(_value) {
		const orderPosts = OrderBy(this.state.allPosts, _value);

		this.setState({
			allPosts: orderPosts,
			order: _value
		});
	}

	render() {
		const { allPosts } = this.state;

		return(
			<div>
				<section className="page-actions flex-mobile">
					<select className="small" onChange={(e) => this.onHandleOrderPosts(e.target.value)}>
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
							allPosts.length ? (
								allPosts.map(post => {
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
												<button type="button" className="red-theme" onClick={() => this.onHandleDelete(post.id)}>Delete</button>
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
	deletePosts: PropTypes.func.isRequired
};

export default connect(null, { deletePosts })(PostsList);
