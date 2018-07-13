import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentsForm from './Form/';
import IMG from '../../assets/images/avatar.svg';

import './index.sass';

class Comments extends React.Component {
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
											<i className="icon-thumbs-up" />
											<i className="icon-thumbs-down" />
											<span className="postComments-voteScore">{comment.voteScore}</span>
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
	comments: PropTypes.array
};

const mapStateToProps = state => {
	return {
		comments: state.commentsReducer.comments
	};
};

export default connect(mapStateToProps)(Comments);
