import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCategories } from '../../actions/categories';
import Header from '../Header/';
import HomePage from '../../pages/Home/';
import Breadcrumb from '../Breadcrumb/';
import CreatePage from '../../pages/Create/';
import CategoryPage from '../../pages/Category/';
import PostDetailsPage from '../../pages/PostDetails/';
import Footer from '../Footer/';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadCategories());
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
						<Route exact path="/posts/:id/edit" component={CreatePage} />
						<Route exact path="/posts/:id" component={PostDetailsPage} />
						<Route exact path="/:category" component={CategoryPage} />
						<Redirect from="/" to="/posts" />
					</Switch>
				</main>

				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	location: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default withRouter(connect(null)(App));
