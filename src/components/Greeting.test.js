import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

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

	test('renders good to see you if the button was NOT clicked', () => {
		// Arrange
		render(<Greeting />);

		const outputElement = screen.getByText(/good to see you/i, { exact: false });
		expect(outputElement).toBeInTheDocument();
	});

	test('renders "Changed!" if the button was clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		// userEvent libary to help us simulate user Events in tests
		// Here we simulate that button buttonElement setet with getByRole was clicked

		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const outputElement = screen.getByText('Changed!');
		expect(outputElement).toBeInTheDocument();
	});

	test('does not render "good to see you" if the button was clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const outputElement = screen.queryByText(/good to see you/i, {
			exact: false,
		});

		expect(outputElement).toBeNull();
	});
});
