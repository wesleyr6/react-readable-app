import React from 'react';
import Alerts from '../../components/Alerts/';

describe('Alerts Component', () => {
	let wrapper;

	const initialState = {
		type: 'success',
		message: 'Here is my message',
		onHide: jest.fn()
	};

	beforeEach(() => {
		const { type, message, onHide } = initialState;

		wrapper = shallow(<Alerts
			type={type}
			message={message}
			onHide={onHide} />);
	});

	it('Should render component', () => {
		expect(wrapper).toHaveLength(1);
	});

	it('Should be shown all the properties', () => {
		expect(wrapper.html()).toMatch(`alert-messages ${initialState.type}`);
		expect(wrapper.find('.alert-messages-desc').html()).toMatch(initialState.message);
	});

	it('Should simulate a click to close alert', () => {
		wrapper.find('.alert-messages-hide').simulate('click');
		expect(initialState.onHide).toHaveBeenCalled();
		expect(initialState.onHide.mock.calls).toHaveLength(1);
	});
});
