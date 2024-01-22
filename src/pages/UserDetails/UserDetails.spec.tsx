import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import store from 'store/store';

import UserDetails from './UserDetails';

jest.mock('react-loader-spinner', () => ({ Oval: jest.fn() }));

describe('UserDetails Component', () => {
	it('renders UserCard when loaded', async () => {
		if (!global.fetch) {
			global.fetch = jest.fn();
		}

		jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
			Promise.resolve({
				json: async () => ({ id: 123, name: 'Test User' }),
			} as Response)
		);

		const { getByTestId } = render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/user/123']}>
					<Routes>
						<Route path="/user/:userId" element={<UserDetails />} />
					</Routes>
				</MemoryRouter>
			</Provider>
		);

		await waitFor(() => expect(getByTestId('user-card')).toBeInTheDocument());
	});
});
