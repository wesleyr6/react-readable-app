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

export class App extends Component {
	componentDidMount() {
		this.props.loadCategories();
	}

	render() {
		const { location } = this.props;

		return(
			<div>
				<Header />

				<main>
					<Breadcrumb location={location} />

					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/create" component={CreatePage} />
						<Route exact path="/:category" component={CategoryPage} />
						<Route exact path="/:category/:id/edit" component={EditPage} />
						<Route exact path="/:category/:id" component={PostDetailsPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</main>

				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	location: PropTypes.object.isRequired,
	loadCategories: PropTypes.func.isRequired
};

export default withRouter(connect(null, { loadCategories })(App));
