import React from 'react';
import { Header } from '../../components/Header/';

describe('Header Component', () => {
	const initialState = {
		categories: ['React', 'Redux', 'Udacity']
	};

	it('Should render component', () => {
		const wrapper = shallow( <Header categories={initialState.categories} /> );
		expect(wrapper).toHaveLength(1);
	});
});
