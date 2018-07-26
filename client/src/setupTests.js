import 'jest-localstorage-mock';
import 'jest-extended';
import 'raf/polyfill';

// ADAPTER
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
global.shallow = shallow;
global.mount = mount;
global.render = render;

// REDUX MOCK
import configureStore from 'redux-mock-store';
const middlewares = [];
global.mockStore = configureStore(middlewares);
