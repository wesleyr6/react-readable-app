import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { voteComments, deleteComments, loadComments } from '../../actions/comments';
import CommentsForm from './Form/';
import IMG from '../../assets/images/avatar.svg';

import './index.sass';

class Comments extends React.Component {
	componentDidMount() {
		const { match, loadComments } = this.props;
		loadComments(match.params.id);
	}

	onHandleVoteScore(id, option) {
		this.props.voteComments(id, {option});
	}

	onHandleDelete(e, id) {
		e.preventDefault();
		this.props.deleteComments(id);
	}

	render() {
		const { comments } = this.props;

		return(
			<div id="postComments">
				<CommentsForm />

				<ul>
					{
						comments && comments.length > 0 &&
						comments.map(comment => {
							return(
								<li key={comment.id}>
									<div className="postComments-user">
										<img src={IMG} alt="Avatar" />
									</div>

									<div className="postComments-content">
										<h3>{comment.author}</h3>
										<p>{comment.body}</p>

										<div className="postComments-content-actions">
											<i className="icon-thumbs-up" onClick={() => this.onHandleVoteScore(comment.id, 'upVote')} />
											<i className="icon-thumbs-down" onClick={() => this.onHandleVoteScore(comment.id, 'downVote')} />
											<span className="postComments-voteScore">{comment.voteScore}</span>
											<button type="button" className="small">Edit</button>
											<button type="button" className="red-theme small" onClick={(e) => this.onHandleDelete(e, comment.id)}>Delete</button>
										</div>
									</div>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

Comments.propTypes = {
	match: PropTypes.object.isRequired,
	comments: PropTypes.array,
	voteComments: PropTypes.func.isRequired,
	loadComments: PropTypes.func.isRequired,
	deleteComments: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		comments: state.commentsReducer.comments
	};
};

export default withRouter(connect(mapStateToProps, { loadComments, deleteComments, voteComments })(Comments));
