import React from 'react';
import Footer from '../../components/Footer/';

describe('Footer Component', () => {
	it('Should render component', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper).toHaveLength(1);
	});

	it('Should contains the keyword copyright', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.find('p').html()).toMatch(/Copyright/);
	});
});
