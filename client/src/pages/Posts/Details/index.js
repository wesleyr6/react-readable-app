import React from 'react';
import PropTypes from 'prop-types';
import { loadPostDetails } from '../../../actions/posts';
import { connect } from 'react-redux';
import { ConvertUNIX } from '../../../helpers/';

import './index.sass';

class PostDetailsPage extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.loadPostDetails(id);
	}

	render() {
		const { post } = this.props;
		return(
			<div className="wrapper">
				{
					post && post.deleted === false &&
					<div id="postDetails">
						<h1><span className="postDetails-category">{post.category}</span>: {post.title}</h1>
						<small>Published {ConvertUNIX(post.timestamp)} by {post.author}</small>
						<p>{post.body}</p>

						<h2>Comentários ({post.commentCount})</h2>
						<p>Here!</p>
					</div>
				}
			</div>
		);
	}
}

PostDetailsPage.propTypes = {
	match: PropTypes.object.isRequired,
	post: PropTypes.object.isRequired,
	loadPostDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		post: state.postsReducer.post
	};
};

export default connect(mapStateToProps, { loadPostDetails })(PostDetailsPage);
