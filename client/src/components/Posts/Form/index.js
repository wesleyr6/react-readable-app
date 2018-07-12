import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alerts from '../../../components/Alerts/';
import { addPosts, editPosts } from '../../../actions/posts';

import './index.sass';

class PostsForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			category: '',
			author: '',
			submitMessage: false,
			formEdit: false
		};

		this.baseState = this.state;

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
		this.onChangeHideMessage = this.onChangeHideMessage.bind(this);
	}

	componentDidUpdate(prevProps) {
		const { post } = this.props;

		if (post && post !== prevProps.post) {
			this.setState({
				title: post.title,
				description: post.body,
				category: post.category,
				author: post.author,
				formEdit: true
			});
		}
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

	onChangeHideMessage() {
		this.setState({
			submitMessage: false
		});
	}

	onHandleSubmit(e) {
		e.preventDefault();

		const { title, author, description, category, formEdit } = this.state;

		if(formEdit) {
			const { id } = this.props.post;

			this.props.editPosts(id, {
				title,
				body: description
			});
		} else {
			this.resetForm();

			this.props.addPosts({
				id: Date.now(),
				timestamp: Date.now(),
				title,
				author,
				body: description,
				category
			});
		}

		this.setState({
			submitMessage: true
		});
	}

	render() {
		const { categories, formTitle } = this.props;
		const { title, author, description, category, submitMessage, formEdit } = this.state;

		return(
			<div>
				{
					submitMessage &&
					<Alerts type="success" message={`Your Post has been ${formEdit === true ? 'updated' : 'saved'}, awesome!`} onHide={this.onChangeHideMessage} />
				}

				<h1>{formTitle}</h1>

				<form className="col-12 flex" onSubmit={(e) => this.onHandleSubmit(e)}>
					<section className="col-8 grid-margin">
						<div className="row">
							<input
								type="text"
								name="title"
								placeholder="Title..."
								className="col-12"
								minLength="3"
								value={title}
								onChange={this.onHandleChange}
								required />
						</div>

						<div className="row">
							<input
								type="text"
								name="author"
								placeholder="Your name..."
								className="col-12"
								minLength="3"
								value={author}
								disabled={formEdit}
								onChange={this.onHandleChange}
								required />
						</div>

						<div className="row">
							<textarea
								name="description"
								rows="15"
								placeholder="Description..."
								className="col-12"
								minLength="10"
								value={description}
								onChange={this.onHandleChange}
								required />
						</div>
					</section>

					<aside className="col-4 grid-margin">
						<section className="aside-box">
							<h2 className="aside-box-title">Category</h2>
							<div className="aside-box-content">
								<select
									name="category"
									onChange={this.onHandleChange}
									value={category}
									disabled={formEdit}
									required>

									<option value="">Select a category</option>
									{
										categories.length &&
										categories.map((category, i) => {
											return(
												<option value={category.name} key={i}>{category.name}</option>
											);
										})
									}
								</select>
							</div>
						</section>

						<section className="aside-box">
							<h2 className="aside-box-title">Publish</h2>
							<div className="aside-box-content">
								<p>Date: {new Date().toLocaleDateString()}</p>
							</div>
							<div className="aside-box-actions">
								<button type="submit" className="blue-theme">Publish</button>
							</div>
						</section>
					</aside>
				</form>
			</div>
		);
	}
}

PostsForm.propTypes = {
	categories: PropTypes.array.isRequired,
	formTitle: PropTypes.string.isRequired,
	post: PropTypes.object,
	addPosts: PropTypes.func.isRequired,
	editPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		categories: state.categoriesReducer
	};
};

export default connect(mapStateToProps, {addPosts, editPosts})(PostsForm);
