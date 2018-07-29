import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import { deleteComments, loadComments } from '../../actions/comments';
import CommentsForm from './Form/';
import VoteScore from '../VoteScore/';
import IMG from '../../assets/images/avatar.svg';

import './index.sass';

export class Comments extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			commentEdit: {
				status: false,
				id: '',
				author: '',
				body: '',
				timestamp: null
			}
		};

		this.onHandleDelete = this.onHandleDelete.bind(this);
		this.onHandleEdit = this.onHandleEdit.bind(this);
	}

	componentDidMount() {
		const { match, loadComments } = this.props;
		loadComments(match.params.id);
	}

	onHandleDelete(e, id) {
		e.preventDefault();
		this.props.deleteComments(id);
	}

	onHandleEdit(e, comment) {
		e.preventDefault();

		this.setState({
			commentEdit: {
				status: true,
				id: comment.id,
				author: comment.author,
				body: comment.body,
				timestamp: comment.timestamp
			}
		});
	}

	render() {
		const { comments } = this.props;
		const { commentEdit } = this.state;

		return(
			<div id="postComments">
				<CommentsForm commentEdit={commentEdit} />

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
										<div>
											<h3>{comment.author}</h3>
											<small><TimeAgo datetime={comment.timestamp} locale='pt_BR' /></small>
										</div>
										<p>{comment.body}</p>

										<div className="postComments-content-actions">
											<VoteScore voteScoreId={`${comment.id}`} voteScoreType="comment" voteScoreResult={comment.voteScore} />
											<button type="button" className="small edit-button" onClick={(e) => this.onHandleEdit(e, comment)}>Edit</button>
											<button type="button" className="red-theme small delete-button" onClick={(e) => this.onHandleDelete(e, comment.id)}>Delete</button>
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
	loadComments: PropTypes.func.isRequired,
	deleteComments: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		comments: state.commentsReducer.comments
	};
};

export default withRouter(connect(mapStateToProps, { loadComments, deleteComments })(Comments));
