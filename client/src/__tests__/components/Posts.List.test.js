import React from 'React';
import { PostsList } from '../../components/Posts/List/';
import { BrowserRouter as Router }    from 'react-router-dom';

describe('Posts Lists Component', () => {
	let wrapper;

	const initialState = {
		mock: jest.fn(),
		posts: [{
			id: Date.now(),
			title: 'My first post',
			author: 'Ghost',
			category: 'react',
			voteScore: 10,
			timestamp: 1532633738316, // 26/07/2018 at 16:35:38
			commentCount: 5
		}],
		postsFilter: 'timestamp'
	};

	beforeEach(() => {
		const { mock, posts, postsFilter } = initialState;

		wrapper = mount(
			<Router>
				<PostsList
					posts={posts}
					postsFilter={postsFilter}
					deletePosts={mock} />
			</Router>
		);
	});

	afterEach(() => {
		initialState.mock.mockReset();
		initialState.mock.mockRestore();
	});

	it('Should render component', () => {
		const { posts } = initialState;
		const getTableLine = wrapper.find('tbody tr').first().find('td');

		expect(wrapper).toHaveLength(1);
		expect(getTableLine.at(0).text()).toEqual(posts[0].title);
		expect(getTableLine.at(1).text()).toEqual(posts[0].author);
		expect(getTableLine.at(2).text()).toEqual(posts[0].category);
		expect(getTableLine.at(3).text()).toEqual(`${posts[0].voteScore}`);
		expect(getTableLine.at(4).text()).toEqual(`${posts[0].commentCount}`);
		expect(getTableLine.at(5).text()).toEqual('26/07/2018');

		// Links to Edit and Details
		const getLinkElement = getTableLine.find('td').at(6).find('a');
		expect(getLinkElement.first().html()).toMatch(`${posts[0].id}`);
		expect(getLinkElement.last().html()).toMatch(`${posts[0].id}`);
	});

	it('Should simulate a delete click', () => {
		wrapper.find('.red-theme').simulate('click');
		expect(initialState.mock).toHaveBeenCalled();
		expect(initialState.mock.mock.calls).toHaveLength(1);
	});

	it('Should render a list with no records', () => {
		const wrapper2 = mount(<PostsList
			posts={[]}
			postsFilter={initialState.postsFilter}
			deletePosts={initialState.mock} />);

		expect(wrapper2.find('tbody tr td').text()).toEqual('No posts found');
	});
});
