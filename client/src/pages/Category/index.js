import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPostsByCategory } from '../../actions/posts';
import PostsList from '../../components/Posts/list';
import PostsFilters from '../../components/Posts/filters';

class CategoryPage extends React.Component {
	componentDidMount() {
		const { category } = this.props.match.params;
		this.props.loadPostsByCategory(category);
	}

	componentDidUpdate(prev) {
		const { category } = this.props.match.params;

		if (prev.match.params.category !== category) {
			this.props.loadPostsByCategory(category);
		}
	}

	render() {
		const { match, posts } = this.props;

		return(
			<div className="wrapper">
				<h1>Posts from {`"${match.params.category}"`}</h1>
				<PostsFilters />
				<PostsList posts={posts} />
			</div>
		);
	}
}

CategoryPage.propTypes = {
	loadPostsByCategory: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	match: PropTypes.object
};

const mapStateToProps = state => {
	return {
		posts: state.postsReducer.posts
	};
};

export default connect(mapStateToProps, { loadPostsByCategory })(CategoryPage);
