import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderPosts } from '../../../actions/posts';

export class PostsFilters extends React.Component {
	render() {
		const { orderPosts } = this.props;

		return(
			<section className="page-actions flex-mobile">
				<select className="small" onChange={(e) => orderPosts(e.target.value)}>
					<option value="voteScore">Vote Score</option>
					<option value="timestamp">Date created</option>
				</select>

				<Link to="/create" className="button">Create new</Link>
			</section>
		);
	}
}

PostsFilters.propTypes = {
	orderPosts: PropTypes.func.isRequired
};

export default connect(null, { orderPosts })(PostsFilters);
