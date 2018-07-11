import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.sass';

const Header = ({ categories }) => {
	return(
		<header>
			<div className="wrapper">
				<Link to="/"><h1>Readable</h1></Link>

				<nav>
					<ul>
						{
							categories.length &&
							categories.map((category, i) => {
								return(
									<li key={i}>
										<NavLink to={`/${category.path}`} activeClassName="nav-active">
											{category.name}
										</NavLink>
									</li>
								);
							})
						}
					</ul>
				</nav>
			</div>
		</header>
	);
};

const mapStateToProps = state => {
	return {
		categories: state.categoriesReducer
	};
};

Header.propTypes = {
	categories: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Header);
