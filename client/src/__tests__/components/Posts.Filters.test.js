import React from 'React';
import { PostsFilters } from '../../components/Posts/Filters/';

describe('Posts Filters Component', () => {
	let wrapper;
	const mock = jest.fn();

	beforeEach(() => {
		wrapper = shallow(<PostsFilters orderPosts={mock} />);
	});

	afterEach(() => {
		mock.mockReset();
		mock.mockRestore();
	});

	it('Should render component', () => {
		expect(wrapper).toHaveLength(1);
	});

	it('Should simulate a Select change', () => {
		wrapper.find('select').simulate('change', { target: { value: 'timestamp' } });
		expect(mock).toHaveBeenCalled();
		expect(mock.mock.calls).toHaveLength(1);
	});
});
