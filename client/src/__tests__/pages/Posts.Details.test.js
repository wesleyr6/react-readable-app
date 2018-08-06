import React from 'react';
import { PostDetailsPage } from '../../pages/Posts/Details/';

describe('PostDetails Page', () => {
	let wrapper;

	const initialState = {
		mockFn: jest.fn(),
		post: {
			id: Date.now(),
			timestamp: 1532633738316, // 26/07/2018 at 16:35:38
			deleted: false,
			category: 'react',
			title: 'Hello World!',
			author: 'ghost',
			body: 'Here we go',
			voteScore: 5,
			commentCount: 5
		},
		match: {
			params: {
				id: Date.now()
			}
		},
		history: {}
	};

	beforeEach(() => {
		wrapper = shallow(<PostDetailsPage
			loadPostDetails={initialState.mockFn}
			deletePosts={initialState.mockFn}
			post={initialState.post}
			match={initialState.match}
			history={initialState.history} />);
	});

	afterEach(() => {
		initialState.mockFn.mockReset();
		initialState.mockFn.mockRestore();
	});

	it('Should render component', () => {
		const { mockFn } = initialState;

		expect(wrapper).toHaveLength(1);
		expect(mockFn).toHaveBeenCalled();
		expect(mockFn.mock.calls).toHaveLength(1);
	});

	it('Should be shown all the properties from the post', () => {
		const { title, category, author, body, commentCount } = initialState.post;

		expect(wrapper.find('h1').html()).toMatch(title);
		expect(wrapper.find('.postDetails-category').html()).toMatch(category);
		expect(wrapper.find('small').html()).toMatch(author);
		expect(wrapper.find('small').html()).toMatch(/26\/07\/2018/);
		expect(wrapper.find('small').html()).toMatch(/16:35/);
		expect(wrapper.find('#postDetails-content p').html()).toMatch(body);
		expect(wrapper.find('#postDetails-content h2').html()).toMatch(`${commentCount}`);
	});
});
