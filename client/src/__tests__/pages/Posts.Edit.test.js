import React from 'react';
import { EditPage } from '../../pages/Posts/Edit/';

describe('PostsEdit Page', () => {
	let wrapper;

	const initialState = {
		mockFn: jest.fn(),
		post: {},
		match: {
			params: {
				id: Date.now()
			}
		}
	};

	beforeEach(() => {
		wrapper = shallow(<EditPage
			loadPostDetails={initialState.mockFn}
			post={initialState.post}
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
});
