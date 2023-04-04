import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as a text', () => {
	// Arrange
	render(<Greeting />);

	// Act
	// ... nothing in this case

	// Assert (you can hard code text or use regex)
	const helloWorldElement = screen.getByText(/hello world!/i);
	expect(helloWorldElement).toBeInTheDocument();
});
