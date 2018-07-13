import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPostDetails } from '../../../actions/posts';
import { loadComments } from '../../../actions/comments';
import { ConvertUNIX } from '../../../helpers/';
import Comments from '../../../components/Comments/';

import './index.sass';

class PostDetailsPage extends React.Component {
	componentDidMount() {
		const { match, loadPostDetails, loadComments } = this.props;

		loadPostDetails(match.params.id);
		loadComments(match.params.id);
	}

	render() {
		const { post } = this.props;
		return(
			<div className="wrapper">
				{
					post && post.deleted === false &&
					<div id="postDetails">
						<h1>
							<span className="postDetails-category">{post.category}</span>:
							{post.title}
						</h1>

						<div id="postDetails-content">
							<small>Published {ConvertUNIX(post.timestamp)} by {post.author}</small>
							<p>{post.body}</p>

							<h2>
								{
									post.commentCount > 0
										? `${post.commentCount} Comments`
										: 'Be the first to comment'
								}
							</h2>

							<Comments />
						</div>
					</div>
				}
			</div>
		);
	}
}

PostDetailsPage.propTypes = {
	match: PropTypes.object.isRequired,
	post: PropTypes.object.isRequired,
	comments: PropTypes.array,
	loadPostDetails: PropTypes.func.isRequired,
	loadComments: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		post: state.postsReducer.post,
		comments: state.commentsReducer.comments
	};
};

export default connect(mapStateToProps, { loadPostDetails, loadComments })(PostDetailsPage);
