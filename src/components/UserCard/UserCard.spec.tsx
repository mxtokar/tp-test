import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserCard from './UserCard';

const mockUser = {
	id: 1,
	name: 'John Doe',
	username: 'johndoe',
	email: 'john@example.com',
	address: {
		city: 'City',
		street: 'Street',
		suite: 'Suite',
		zipcode: '12345',
		geo: { lat: '40.7128', lng: '-74.0060' },
	},
	phone: '123-456-7890',
	website: 'example.com',
	company: {
		name: 'Company Name',
		catchPhrase: 'Catch Phrase',
		bs: 'BS',
	},
};

jest.mock('react-router-dom', () => {
	const originalModule = jest.requireActual('react-router-dom');

	return {
		...originalModule,
		useNavigate: jest.fn(),
	};
});

describe('UserCard Component', () => {
	test('calls navigate when "Back to user list" button is clicked', () => {
		const navigateMock = jest.fn();
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);

		const { getByText } = render(
			<BrowserRouter>
				<UserCard user={mockUser} />
			</BrowserRouter>
		);

		fireEvent.click(getByText(/Back to user list/i));
		expect(navigateMock).toHaveBeenCalledWith('/');
	});
});
