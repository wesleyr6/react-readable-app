import React from 'react';
import PropTypes from 'prop-types';

import './index.sass';

const Alerts = ({ type, message, onHide }) => {
	return(
		<div className={`alert-messages ${type}`}>
			<p className="alert-messages-desc">{message}</p>
			<span className="alert-messages-hide" onClick={onHide} title="Close it">X</span>
		</div>
	);
};

Alerts.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onHide: PropTypes.func.isRequired
};

export default Alerts;
