import React from 'react';
import { HomePage } from '../../pages/Home/';

describe('Home Page', () => {
	it('Should render component', () => {
		const dispatchMock = jest.fn();
		const wrapper = shallow(<HomePage loadPosts={dispatchMock} posts={[]} />);

		expect(wrapper).toHaveLength(1);
		expect(dispatchMock).toHaveBeenCalled();
		expect(dispatchMock.mock.calls).toHaveLength(1);
	});
});
