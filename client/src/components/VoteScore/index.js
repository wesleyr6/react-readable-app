import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { voteComments } from '../../actions/comments';
import { votePosts } from '../../actions/posts';

import './index.sass';

class VoteScore extends React.Component {
	onHandleVoteScore(id, type, vote) {
		const { voteComments, votePosts } = this.props;

		switch(type) {
		case 'post':
			votePosts(id, vote);
			break;
		case 'comment':
			voteComments(id, vote);
			break;
		default:
			return false;
		}
	}

	render() {
		const { voteScoreId, voteScoreType, voteScoreResult } = this.props;

		return(
			<div className="voteScore">
				<i className="icon-thumbs-up" onClick={() => this.onHandleVoteScore(voteScoreId, voteScoreType, 'upVote')} />
				<i className="icon-thumbs-down" onClick={() => this.onHandleVoteScore(voteScoreId, voteScoreType, 'downVote')} />
				<span className="voteScore-result">{voteScoreResult}</span>
			</div>
		);
	}
}

VoteScore.propTypes = {
	voteScoreId: PropTypes.string.isRequired,
	voteScoreType: PropTypes.string.isRequired,
	voteScoreResult: PropTypes.number.isRequired,
	voteComments: PropTypes.func.isRequired,
	votePosts: PropTypes.func.isRequired
};

export default connect(null, { voteComments, votePosts })(VoteScore);
