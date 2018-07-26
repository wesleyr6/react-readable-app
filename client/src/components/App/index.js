import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCategories } from '../../actions/categories';
import Header from '../Header/';
import HomePage from '../../pages/Home/';
import Breadcrumb from '../Breadcrumb/';
import CreatePage from '../../pages/Posts/Create/';
import EditPage from '../../pages/Posts/Edit/';
import CategoryPage from '../../pages/Category/';
import PostDetailsPage from '../../pages/Posts/Details/';
import NotFoundPage from '../../pages/404/';
import Footer from '../Footer/';

class App extends Component {
	componentDidMount() {
		loadCategories();
	}

	render() {
		const { location } = this.props;

		return(
			<div>
				<Header />

				<main>
					<Breadcrumb location={location} />

					<Switch>
						<Route exact path="/posts" component={HomePage} />
						<Route exact path="/posts/create" component={CreatePage} />
						<Route exact path="/posts/:id/edit" component={EditPage} />
						<Route exact path="/posts/:id" component={PostDetailsPage} />
						<Route exact path="/:category" component={CategoryPage} />
						<Route component={NotFoundPage} />
						<Redirect from="/" to="/posts" />
					</Switch>
				</main>

				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(connect(null, { loadCategories })(App));
