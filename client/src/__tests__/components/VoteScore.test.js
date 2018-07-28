import React from 'React';
import { VoteScore } from '../../components/VoteScore/';

describe('Vote Score Component', () => {
	let wrapper;

	const initialState = {
		mock: jest.fn(),
		voteScoreId: '131312321',
		voteScoreType: 'post',
		voteScoreResult: 6
	};

	beforeEach(() => {
		const { mock, voteScoreId, voteScoreType, voteScoreResult } = initialState;

		wrapper = shallow(<VoteScore
			voteScoreId={voteScoreId}
			voteScoreType={voteScoreType}
			voteScoreResult={voteScoreResult}
			voteComments={mock}
			votePosts={mock} />);
	});

	afterEach(() => {
		initialState.mock.mockReset();
	});

	it('Should render component', () => {
		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('.voteScore-result').html()).toMatch(`${initialState.voteScoreResult}`);
	});

	it('Should contains like and dislike buttons', () => {
		expect(wrapper.find('.icon-thumbs-up')).toHaveLength(1);
		expect(wrapper.find('.icon-thumbs-down')).toHaveLength(1);
	});

	it('Should simulate a click to vote on Posts', () => {
		wrapper.find('.icon-thumbs-up').simulate('click');
		expect(initialState.mock).toHaveBeenCalled();
		wrapper.find('.icon-thumbs-down').simulate('click');
		expect(initialState.mock).toHaveBeenCalledTimes(2);
	});

	it('Should simulate a click to vote on Comments', () => {
		const { mock, voteScoreId, voteScoreResult } = initialState;

		const wrapper2 = shallow(<VoteScore
			voteScoreId={voteScoreId}
			voteScoreType="comment"
			voteScoreResult={voteScoreResult}
			voteComments={mock}
			votePosts={mock} />);

		wrapper2.find('.icon-thumbs-up').simulate('click');
		expect(mock).toHaveBeenCalled();
		wrapper2.find('.icon-thumbs-down').simulate('click');
		expect(mock).toHaveBeenCalledTimes(2);
	});

	it('Should not dispatch function on simulating a click', () => {
		const { mock, voteScoreId, voteScoreResult } = initialState;

		const wrapper2 = shallow(<VoteScore
			voteScoreId={voteScoreId}
			voteScoreType=""
			voteScoreResult={voteScoreResult}
			voteComments={mock}
			votePosts={mock} />);

		wrapper2.find('.icon-thumbs-up').simulate('click');
		expect(mock).not.toHaveBeenCalled();
		wrapper2.find('.icon-thumbs-down').simulate('click');
		expect(mock).not.toHaveBeenCalled();
	});
});
