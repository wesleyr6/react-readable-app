import React from 'React';
import { CommentsForm } from '../../components/Comments/Form';

describe('Comments Form Component', () => {
	let wrapper;

	const initialState = {
		mock: jest.fn(),
		match: {
			params: {
				id: Date.now(),
			}
		},
		commentEdit: {
			edit: true,
			id: Date.now(),
			username: 'Ghost',
			usermessage: 'here is my body content',
			timestamp: Date.now()
		}
	};

	beforeEach(() => {
		const { mock, match, commentEdit } = initialState;

		wrapper = shallow(<CommentsForm
			match={match}
			commentEdit={commentEdit}
			editComments={mock}
			addComments={mock} />);
	});

	afterEach(() => {
		initialState.mock.mockReset();
		initialState.mock.mockRestore();
	});

	it('Should render component', () => {
		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('[name="username"]').props().value).toBeEmpty();
		expect(wrapper.find('[name="usermessage"]').props().value).toBeEmpty();
		expect(wrapper.find('button').html()).toMatch(/Comment/);
	});

	it('Should render component with data on method ComponentDidMount', () => {
		const { commentEdit } = initialState;

		wrapper.setState({
			edit: commentEdit.edit,
			id: commentEdit.id,
			username: commentEdit.username,
			usermessage: commentEdit.usermessage,
			timestamp: commentEdit.timestamp
		});

		expect(wrapper.find('[name="username"]').props().value).toMatch(commentEdit.username);
		expect(wrapper.find('[name="usermessage"]').props().value).toMatch(commentEdit.usermessage);
		expect(wrapper.find('button').html()).toMatch(/Update/);
	});

	it('Should submit a form', () => {
		wrapper.find('#commentsForm').simulate('submit', { preventDefault() {} });
		expect(initialState.mock).toHaveBeenCalled();
		expect(initialState.mock).toHaveBeenCalledTimes(1);
		expect(initialState.mock.mock.calls).toHaveLength(1);

		// CLEAR FORM
		expect(wrapper.find('[name="username"]').props().value).toBeEmpty();
		expect(wrapper.find('[name="usermessage"]').props().value).toBeEmpty();
	});
});
