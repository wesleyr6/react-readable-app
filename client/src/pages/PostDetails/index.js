import React from 'react';
import PropTypes from 'prop-types';
import { loadPostDetails } from '../../actions/posts';
import { connect } from 'react-redux';
import { ConvertUNIX } from '../../helpers/';

import './index.sass';

class PostDetailsPage extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.loadPostDetails(id);
	}

	render() {
		const { postDetails } = this.props;
		return(
			<div className="wrapper">
				{
					postDetails && postDetails.deleted === false &&
					<div id="postDetails">
						<h1><span className="postDetails-category">{postDetails.category}</span>: {postDetails.title}</h1>
						<small>Published {ConvertUNIX(postDetails.timestamp)} by {postDetails.author}</small>
						<p>{postDetails.body}</p>

						<h2>Comentários</h2>
						<p>Here!</p>
					</div>
				}
			</div>
		);
	}
}

PostDetailsPage.propTypes = {
	match: PropTypes.object.isRequired,
	postDetails: PropTypes.object.isRequired,
	loadPostDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		postDetails: state.postsReducer.postDetails
	};
};

export default connect(mapStateToProps, { loadPostDetails })(PostDetailsPage);
