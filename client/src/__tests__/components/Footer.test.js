import React from 'react';
import Footer from '../../components/Footer/';

describe('Footer Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Footer />);
	});

	it('Should render component', () => {
		expect(wrapper).toHaveLength(1);
	});

	it('Should contain the keyword copyright', () => {
		expect(wrapper.find('p').html()).toMatch(/Copyright/);
	});
});
