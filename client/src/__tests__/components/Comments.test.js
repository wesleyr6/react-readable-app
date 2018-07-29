import React from 'React';
import { Comments } from '../../components/Comments/';

describe('Comments Component', () => {
	let wrapper;

	const initialState = {
		mock: jest.fn(),
		match: {
			params: {
				id: Date.now(),
			}
		},
		comments: [{
			id: Date.now(),
			author: 'Ghost',
			body: 'Here is my body comment',
			timestamp: 1532633738316, // 26/07/2018 at 16:35:38
			voteScore: 5
		}]
	};

	beforeEach(() => {
		const { mock, match, comments } = initialState;

		wrapper = shallow(<Comments
			match={match}
			comments={comments}
			loadComments={mock}
			deleteComments={mock} />);
	});

	afterEach(() => {
		initialState.mock.mockReset();
		initialState.mock.mockRestore();
	});

	it('Should render component', () => {
		const { comments } = initialState;

		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('.postComments-content h3').html()).toMatch(comments[0].author);
		expect(wrapper.find('.postComments-content p').html()).toMatch(comments[0].body);
		expect(initialState.mock).toHaveBeenCalled();
		expect(initialState.mock.mock.calls).toHaveLength(1);
	});

	it('Should simulate a delete click', () => {
		wrapper.find('.delete-button').simulate('click', { preventDefault() {} });
		expect(initialState.mock).toHaveBeenCalled();
	});
});
