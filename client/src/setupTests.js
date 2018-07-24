import 'jest-localstorage-mock';
import 'raf/polyfill';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.shallow = shallow;

configure({ adapter: new Adapter() });
