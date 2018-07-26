import React from 'react';
import Alerts from '../../components/Alerts/';

describe('Alerts Component', () => {
	it('Should render component with props', () => {
		const wrapper = shallow(<Alerts type="success" message="testing..." onHide={() => {}} />);
		expect(wrapper).toHaveLength(1);
	});

	it('Should render component without any props', () => {
		const wrapper = shallow(<Alerts />);
		expect(wrapper).toHaveLength(1);
	});
});
