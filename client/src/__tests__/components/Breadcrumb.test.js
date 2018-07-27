import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/';

describe('Breadcrumb Component', () => {
	let wrapper;

	const initialState = {
		location: {
			pathname: '/posts/categories/react/react-e-bom'
		}
	};

	beforeEach(() => {
		wrapper = shallow(<Breadcrumb location={initialState.location}/>);
	});

	it('Should render component', () => {
		expect(wrapper).toHaveLength(1);
	});

	it('Should render pathnames', () => {
		const texts = wrapper.find('li').map(node => node.text());
		expect(texts).toHaveLength(4);
	});
});





