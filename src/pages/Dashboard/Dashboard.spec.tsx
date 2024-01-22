import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from 'store/store';

import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
	it('renders user list when loaded', async () => {
		if (!global.fetch) {
			global.fetch = jest.fn();
		}

		jest.spyOn(global, 'fetch').mockResolvedValueOnce({
			json: async () => [
				{
					id: 1,
					name: 'Leanne Graham',
					city: 'Gwenborough',
					email: 'Sincere@april.biz',
					phone: '1-770-736-8031 x56442',
					website: 'http://hildegard.org',
				},
			],
		} as Response);

		await act(async () => {
			render(
				<Provider store={store}>
					<MemoryRouter>
						<Dashboard />
					</MemoryRouter>
				</Provider>
			);
		});

		await waitFor(() => {
			expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
		});
	});
});
