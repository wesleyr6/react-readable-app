import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addComments } from '../../../actions/comments';
import IMG from '../../../assets/images/avatar.svg';
import './index.sass';

class CommentsForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			usermessage: ''
		};

		this.baseState = this.state;

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	resetForm() {
		this.setState(this.baseState);
	}

	onHandleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			submitMessage: false
		});
	}

	onHandleSubmit(e) {
		e.preventDefault();

		const { username, usermessage } = this.state;
		const { match } = this.props;

		this.resetForm();

		this.props.addComments({
			id: Date.now(),
			timestamp: Date.now(),
			author: username,
			body: usermessage,
			parentId: match.params.id
		});
	}

	render() {
		const { username, usermessage } = this.state;

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
						<button className="blue-theme">Comment</button>
					</div>
				</div>
			</form>
		);
	}
}

CommentsForm.propTypes = {
	match: PropTypes.object.isRequired,
	addComments: PropTypes.func.isRequired
};

export default withRouter(connect(null, { addComments})(CommentsForm));
