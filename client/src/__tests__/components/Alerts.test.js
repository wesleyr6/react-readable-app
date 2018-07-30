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

	it('Should render without props', () => {
		const wrapper2 = shallow(<Alerts />);
		expect(wrapper2).toHaveLength(1);

		// DEFAULT PARAMS
		expect(wrapper2.html()).toMatch(/success/);
		expect(wrapper2.find('.alert-messages-desc').text()).toEqual('Testing message...');
	});

	it('Should render props', () => {
		expect(wrapper.html()).toMatch(`alert-messages ${initialState.type}`);
		expect(wrapper.find('.alert-messages-desc').html()).toMatch(initialState.message);
	});

	it('Should simulate a click to close alert', () => {
		wrapper.find('.alert-messages-hide').simulate('click');
		expect(initialState.onHide).toHaveBeenCalled();
		expect(initialState.onHide.mock.calls).toHaveLength(1);
	});
});
