import React from 'React';
import { PostsForm } from '../../components/Posts/Form/';

describe('Posts Form Component', () => {
	let wrapper;

	const initialState = {
		categories: [],
		formTitle: 'Form title',
		post: {},
		mock: jest.fn()
	};

	beforeEach(() => {
		const { categories, formTitle, post, mock } = initialState;

		wrapper = shallow(<PostsForm
			categories={categories}
			formTitle={formTitle}
			post={post}
			addPosts={mock}
			editPosts={mock} />);
	});

	afterEach(() => {
		initialState.mock.mockReset();
		initialState.mock.mockRestore();
	});

	it('Should render component', () => {
		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('h1').text()).toEqual(initialState.formTitle);
	});

	it('Should simulate a submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(initialState.mock).toHaveBeenCalled();
		expect(initialState.mock.mock.calls).toHaveLength(1);
	});
});
