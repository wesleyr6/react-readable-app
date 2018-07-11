import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.sass';

const Breadcrumb = ({ location: {pathname} }) => {
	return(
		<nav id="breadcrumb">
			<div className="wrapper">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li>{pathname.replace('/', '')}</li>
				</ul>
			</div>
		</nav>
	);
};

Breadcrumb.propTypes = {
	location: PropTypes.object
};

export default Breadcrumb;
