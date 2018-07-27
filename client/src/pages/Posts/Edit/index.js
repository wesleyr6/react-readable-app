import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPostDetails } from '../../../actions/posts';
import PostsForm from '../../../components/Posts/Form/';

export class EditPage extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.loadPostDetails(id);
	}

	render() {
		const { post } = this.props;

		return(
			<div className="wrapper">
				<PostsForm formTitle="Edit Post" post={post} />
			</div>
		);
	}
}

EditPage.propTypes = {
	match: PropTypes.object.isRequired,
	loadPostDetails: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		post: state.postsReducer.post
	};
};

export default connect(mapStateToProps, { loadPostDetails })(EditPage);
