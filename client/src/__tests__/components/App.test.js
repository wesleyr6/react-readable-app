import React from 'react';
// import { MemoryRouter } from 'react-router';
import App from '../../components/App/';
import Header from '../../components/Header/';
// import CategoryPage from '../../pages/Category/';
// import NotFoundPage from '../../pages/404/';

describe('App Component', () => {
	const initialState = {};
	const store = global.mockStore(initialState);

	it('Should mount component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toHaveLength(1);
	});

	it('Should be <Header />', () => {
	});

	it('Should be <Footer />', () => {
	});

	it('Should be load categories', () => {
	});

	it('Should be render all the components into <Route />', () => {
	});

	it('Should not redirect to 404 for validing path', () => {
	});

	it('Should redirect to 404 for invaliding path', () => {
	});
});
