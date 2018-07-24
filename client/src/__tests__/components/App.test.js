import React from 'react';

describe('App Component', () => {
	it('Render', () => {
		const wrapper = shallow(<main />);
		expect(wrapper).toHaveLength(1);
	});
});
