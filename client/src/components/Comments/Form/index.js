import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addComments, editComments } from '../../../actions/comments';
import IMG from '../../../assets/images/avatar.svg';
import './index.sass';

class CommentsForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			edit: false,
			id: '',
			username: '',
			usermessage: ''
		};

		this.baseState = this.state;

		this.resetForm = this.resetForm.bind(this);
		this.addComment = this.addComment.bind(this);
		this.editComment = this.editComment.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	componentDidUpdate(prevProps) {
		const { commentEdit } = this.props;

		if (commentEdit.body !== prevProps.commentEdit.body) {
			this.setState({
				edit: true,
				id: commentEdit.id,
				username: commentEdit.author,
				usermessage: commentEdit.body
			});
		}
	}

	resetForm() {
		this.setState(this.baseState);
	}

	onHandleChange(e) {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	}

	onHandleSubmit(e) {
		e.preventDefault();

		const { edit } = this.state;

		this.resetForm();

		if(edit) {
			this.editComment();
		} else {
			this.addComment();
		}
	}

	addComment() {
		const { match, addComments } = this.props;
		const { username, usermessage } = this.state;

		addComments({
			id: Date.now(),
			timestamp: Date.now(),
			author: username,
			body: usermessage,
			parentId: match.params.id
		});
	}

	editComment() {
		const { editComments } = this.props;
		const { id, usermessage } = this.state;

		this.setState({
			edit: false
		});

		editComments({
			id,
			timestamp: Date.now(),
			body: usermessage
		});
	}

	render() {
		const { edit, username, usermessage } = this.state;

		return(
			<form id="commentsForm" onSubmit={this.onHandleSubmit}>
				<div className="commentsForm-user">
					<img src={IMG} alt="Avatar" />
				</div>

				<div className="commentsForm-content">
					<div className="row">
						<input
							type="text"
							name="username"
							placeholder="Your name..."
							minLength="3"
							value={username}
							onChange={this.onHandleChange}
							disabled={edit ? true : false}
							required />
					</div>

					<div className="row">
						<textarea
							rows="3"
							name="usermessage"
							placeholder="Your comment..."
							value={usermessage}
							onChange={this.onHandleChange}
							minLength="3"
							required />
					</div>

					<div className="row">
						<button className="blue-theme">
							{edit ? 'Update' : 'Comment'}
						</button>
					</div>
				</div>
			</form>
		);
	}
}

CommentsForm.propTypes = {
	match: PropTypes.object.isRequired,
	addComments: PropTypes.func.isRequired,
	editComments: PropTypes.func.isRequired,
	commentEdit: PropTypes.object.isRequired
};

export default withRouter(connect(null, { addComments, editComments })(CommentsForm));
