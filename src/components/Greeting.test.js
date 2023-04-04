import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
	// in describe global funtion we can add many tests inside to make them a part of test suite' in this eg. we have only one test.

	test('renders Hello World as a text', () => {
		// Arrange
		render(<Greeting />);

		// Act
		// ... nothing in this case

		// Assert (you can hard code text or use regex)
		const helloWorldElement = screen.getByText(/hello world!/i);
		expect(helloWorldElement).toBeInTheDocument();
	});
});
