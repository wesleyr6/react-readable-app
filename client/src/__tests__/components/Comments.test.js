import React from 'React';
import { Comments } from '../../components/Comments/';

describe('Comments Component', () => {
	let wrapper;

	const initialState = {
		deleteComments: jest.fn(),
		loadComments: jest.fn(),
		match: {
			params: {
				id: Date.now(),
			}
		},
		comments: []
	};

	beforeEach(() => {
		wrapper = shallow(<Comments {...initialState} />);
		wrapper.setState({
			comments: [{
				id: Date.now(),
				author: 'Ghost',
				body: 'Here is my body comment',
				timestamp: 1532633738316, // 26/07/2018 at 16:35:38
				voteScore: 5
			}]
		});
	});

	it('Should render component', () => {
		expect(wrapper).toHaveLength(1);
		expect(initialState.loadComments).toHaveBeenCalled();
		expect(initialState.loadComments.mock.calls).toHaveLength(1);
	});

	it('Should load the comments', () => {
		const getState = wrapper.state().comments[0];
		expect(wrapper.find('.postComments-content h3').html()).toMatch(getState.author);
		expect(wrapper.find('.postComments-content p').html()).toMatch(getState.body);
	});

	it('Should simulate a delete click', () => {
		wrapper.find('.delete-button').simulate('click', { preventDefault() {} });
		expect(initialState.deleteComments).toHaveBeenCalled();
	});
});
