import 'jest-localstorage-mock';
import 'jest-extended';
import 'raf/polyfill';
import thunk from 'redux-thunk';

// ADAPTER
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// REDUX MOCK
import configureStore from 'redux-mock-store';
const middlewares = [thunk];

// GLOBAL
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.mockStore = configureStore(middlewares);
