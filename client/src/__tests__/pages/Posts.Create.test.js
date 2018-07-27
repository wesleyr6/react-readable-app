import React from 'react';
import CreatePage from '../../pages/Posts/Create/';

describe('Create Page', () => {
	it('Should render component', () => {
		const wrapper = shallow(<CreatePage />);
		expect(wrapper).toHaveLength(1);
	});
});
