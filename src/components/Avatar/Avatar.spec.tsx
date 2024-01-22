import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import Avatar from './Avatar';

describe('Avatar Component', () => {
	test('renders initials based on the provided name', () => {
		const testName = 'John Doe';

		const { getByText } = render(<Avatar name={testName} />);
		const initialsElement = getByText(/JD/i);
		expect(initialsElement).toBeInTheDocument();
	});
});
