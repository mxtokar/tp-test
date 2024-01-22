import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './store/store';

test('renders the App component', () => {
	const { getByText } = render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	);

	// Add assertions based on your App component content
	const appElement = getByText(/Travel Point test project by mxtokar/);
	expect(appElement).toBeInTheDocument();
});

// Add more tests as needed
