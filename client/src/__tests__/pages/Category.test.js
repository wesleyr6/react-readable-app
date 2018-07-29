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
			match={initialState.match} />, { lifecycleExperimental: true });
	});

	afterEach(() => {
		initialState.mockFn.mockReset();
		initialState.mockFn.mockRestore();
	});

	it('Should render component', () => {
		const { mockFn } = initialState;

		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('h1').html()).toMatch(/react/);
		expect(mockFn).toHaveBeenCalled();
		expect(mockFn.mock.calls).toHaveLength(1);
	});

	it('Should render component with new data on method ComponentDidMount', () => {
		const { mockFn } = initialState;

		wrapper.setProps({
			match: {
				params: {
					category: 'redux'
				}
			}
		});

		expect(wrapper.find('h1').html()).toMatch(/redux/);
		expect(mockFn).toHaveBeenCalled();
	});
});
