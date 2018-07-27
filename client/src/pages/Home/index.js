import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPosts } from '../../actions/posts';
import PostsList from '../../components/Posts/List/';
import PostsFilters from '../../components/Posts/Filters/';

export class HomePage extends React.Component {
	componentDidMount() {
		this.props.loadPosts();
	}

	render() {
		const { posts } = this.props;

		return(
			<div className="wrapper">
				<h1>Posts</h1>
				<PostsFilters />
				<PostsList posts={posts} />
			</div>
		);
	}
}

HomePage.propTypes = {
	loadPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		posts: state.postsReducer.posts
	};
};

export default connect(mapStateToProps, { loadPosts })(HomePage);
