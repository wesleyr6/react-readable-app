import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPostDetails } from '../../../actions/posts';
import { ConvertToDateAndTime } from '../../../helpers/';
import Comments from '../../../components/Comments/';
import VoteScore from '../../../components/VoteScore/';
import Alerts from '../../../components/Alerts/';
import { deletePosts } from '../../../actions/posts';

import './index.sass';

export class PostDetailsPage extends React.Component {
	componentDidMount() {
		const { match, loadPostDetails } = this.props;
		loadPostDetails(match.params.id);
	}

	onHandleDelete(postID) {
		const { history, deletePosts } = this.props;

		if (window.confirm('Do you really want to delete this post?')) {
			deletePosts(postID);
			history.goBack();
		}
	}

	render() {
		const { post } = this.props;
		let commentsTitle = `${post.commentCount} Comments`;

		if(post) {
			if(post.commentCount === 0) {
				commentsTitle = 'Be the first to comment';
			} else if(post.commentCount === 1) {
				commentsTitle = '1 Comment';
			}
		}

		return(
			<div className="wrapper">
				{
					post &&
					post.deleted === false ? (
							<div id="postDetails">
								<div id="postDetails-header">
									<h1>
										<span className="postDetails-category">{post.category}</span>: {post.title}
									</h1>

									<div id="postDetails-header-actions">
										<Link to={`/${post.category}/${post.id}/edit`} className="button">Edit</Link>
										<button type="button" className="red-theme" onClick={() => this.onHandleDelete(post.id)}>Delete</button>
									</div>
								</div>

								<div id="postDetails-content">
									<small>Published {ConvertToDateAndTime(post.timestamp)} by {post.author}</small>
									<p>{post.body}</p>
									<VoteScore voteScoreId={`${post.id}`} voteScoreType="post" voteScoreResult={post.voteScore} />

									<h2>{commentsTitle}</h2>
									<Comments />
								</div>
							</div>
						) : (
							<div id="postDetails">
								<h1>
									<span className="postDetails-category">OPS!</span>
								</h1>

								<Alerts
									type="info"
									message="This post is not available anymore." />
							</div>
						)
				}
			</div>
		);
	}
}

PostDetailsPage.propTypes = {
	match: PropTypes.object.isRequired,
	post: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	loadPostDetails: PropTypes.func.isRequired,
	deletePosts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		post: state.postsReducer.post
	};
};

export default connect(mapStateToProps, { deletePosts, loadPostDetails })(PostDetailsPage);
