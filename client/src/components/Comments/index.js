import React from 'react';
import PropTypes from 'prop-types';
import IMG from '../../assets/images/avatar.svg';

import './index.sass';

class Comments extends React.Component {
	render() {
		const { comments } = this.props;

		return(
			<ul id="postComments">
				{
					comments && comments.length &&
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
		);
	}
}

Comments.propTypes = {
	comments: PropTypes.array.isRequired
};

export default Comments;
