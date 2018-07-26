import React from 'react';
import PropTypes from 'prop-types';

import './index.sass';

const Alerts = ({ type = 'success', message = 'Testing message...', onHide }) => {
	return(
		<div className={`alert-messages ${type}`}>
			<p className="alert-messages-desc">{message}</p>
			{
				onHide &&
				<span className="alert-messages-hide" onClick={onHide} title="Close it">X</span>
			}
		</div>
	);
};

Alerts.propTypes = {
	type: PropTypes.string,
	message: PropTypes.string,
	onHide: PropTypes.func
};

export default Alerts;
