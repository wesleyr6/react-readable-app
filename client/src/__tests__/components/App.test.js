import React from 'react';
// import { MemoryRouter } from 'react-router';
import { App } from '../../components/App/';

describe('App Component', () => {
	let wrapper;

	const initialState = {
		loadCategories: jest.fn(),
		location: {}
	};

	beforeEach(() => {
		wrapper = shallow(<App
			location={initialState.location}
			loadCategories={initialState.loadCategories} />);
	});

	afterEach(() => {
		initialState.loadCategories.mockReset();
	});

	it('Should mount component', () => {
		expect(wrapper).toHaveLength(1);
	});

	it('Should load all the categories', () => {
		expect(initialState.loadCategories).toHaveBeenCalled();
		expect(initialState.loadCategories.mock.calls).toHaveLength(1);
	});

	it('Should navigate for all the components into <Route />', () => {
	});

	it('Should not redirect to 404 for validing path', () => {
	});

	it('Should redirect to 404 for invaliding path', () => {
	});
});
