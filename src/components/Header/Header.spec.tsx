import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import Header from './Header';

describe('Header Component', () => {
	test('renders the header text', () => {
		const { getByText } = render(<Header />);
		const headerTextElement = getByText(/Travel Point test project by mxtokar/i);

		expect(headerTextElement).toBeInTheDocument();
	});
});
