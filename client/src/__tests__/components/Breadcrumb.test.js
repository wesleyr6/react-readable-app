import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/';

describe('Breadcrumb Component', () => {
	it('Should render component', () => {
		const wrapper = shallow(<Breadcrumb location={{ pathname: '/posts' }}/>);
		expect(wrapper).toHaveLength(1);
	});

	it('Should render pathnames', () => {
		const wrapper = shallow(<Breadcrumb location={{ pathname: '/posts/categories/react/react-e-bom' }}/>);
		const texts = wrapper.find('li').map(node => node.text());
		expect(texts).toHaveLength(4);
	});
});





