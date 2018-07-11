import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.sass';

class Breadcrumb extends React.Component {
	render() {
		const { location } = this.props;
		const getPaths = location.pathname.split('/');
		const paths = getPaths.filter(path => path !== '');
		let arrPaths = '';

		return(
			<nav id="breadcrumb">
				<div className="wrapper">
					<ul>
						<li><Link to="/">Home</Link></li>
						{
							paths && paths.length &&
							paths.map((path, i) => {
								arrPaths = arrPaths + `/${path}`;
								return(
									<li key={i}><Link to={arrPaths}>{path}</Link></li>
								);
							})
						}
					</ul>
				</div>
			</nav>
		);
	}
}

Breadcrumb.propTypes = {
	location: PropTypes.object
};

export default Breadcrumb;
