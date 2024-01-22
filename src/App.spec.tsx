import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from 'core/constants/routes';

import App from './App';
import store from './store/store';

test('renders App component', () => {
	render(
		<MemoryRouter initialEntries={[ROUTES.DASHBOARD]}>
			<Provider store={store}>
				<App />
			</Provider>
		</MemoryRouter>
	);
});
