import React from 'React';
import { PostsList } from '../../components/Posts/List/';

describe('Posts Lists Component', () => {
	let wrapper;

	const initialState = {
		deletePosts: jest.fn(),
		posts: [{
			id: Date.now(),
			title: 'My first post',
			author: 'Ghost',
			category: 'react',
			voteScore: 10,
			timestamp: 1532633738316, // 26/07/2018 at 16:35:38
			commentCount: 5
		}],
		order: 'voteScore'
	};

	beforeEach(() => {
		wrapper = shallow(<PostsList {...initialState} />);
		wrapper.setState({
			allPosts: [{
				id: Date.now(),
				title: 'My first post',
				author: 'Ghost',
				category: 'react',
				voteScore: 10,
				timestamp: 1532633738316, // 26/07/2018 at 16:35:38
				commentCount: 5
			}]
		});
	});

	it('Should render component', () => {
		const { posts } = initialState;
		const getTableLine = wrapper.find('tbody td');

		expect(wrapper).toHaveLength(1);
		expect(getTableLine.at(0).text()).toEqual(posts[0].title);
		expect(getTableLine.at(1).text()).toEqual(posts[0].author);
		expect(getTableLine.at(2).text()).toEqual(posts[0].category);
		expect(getTableLine.at(4).text()).toEqual(`${posts[0].commentCount}`);
		expect(getTableLine.at(5).text()).toEqual('26/07/2018');
	});
});
