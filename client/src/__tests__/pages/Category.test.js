import React from 'react';
import { CategoryPage } from '../../pages/Category/';

describe('Category Page', () => {
	let wrapper;

	const initialState = {
		mockFn: jest.fn(),
		posts: [],
		match: {
			params: {
				category: 'react'
			}
		}
	};

	beforeEach(() => {
		wrapper = shallow(<CategoryPage
			loadPostsByCategory={initialState.mockFn}
			posts={initialState.posts}
			match={initialState.match} />);
	});

	afterEach(() => {
		initialState.mockFn.mockReset();
	});

	it('Should render component', () => {
		const { mockFn } = initialState;

		expect(wrapper).toHaveLength(1);
		expect(mockFn).toHaveBeenCalled();
		expect(mockFn.mock.calls).toHaveLength(1);
	});

	it('Should contains the category into <h1 />', () => {
		expect(wrapper.find('h1').html()).toMatch(/react/);
	});
});
