import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home, { CardContainter } from '.';

describe('Home component', () => {
	test('render "Popular Titles" correctly', () => {
		const { getByText } = render(
			<Router>
				<Home />
			</Router>
		);
		const headingElement = getByText(/popular titles/i);
		expect(headingElement).toBeInTheDocument();
	});

	test('render "Popular Series" card correctly', () => {
		const { getByText } = render(
			<CardContainter>Popular Series</CardContainter>
		);
		const seriesCardElement = getByText(/popular series/i);
		expect(seriesCardElement).toBeInTheDocument();
	});

	test('render "Popular Movies" card correctly', () => {
		const { getByText } = render(
			<CardContainter>Popular Movies</CardContainter>
		);
		const moviesCardElement = getByText(/popular movies/i);
		expect(moviesCardElement).toBeInTheDocument();
	});

	test('navigate to "/series" when "Popular Series" card is clicked', () => {
		const { getByRole } = render(
			<Router>
				<Home />
			</Router>
		);
		const seriesLink = getByRole('link', { name: /popular series/i });
		fireEvent.click(seriesLink);
		expect(window.location.pathname).toBe('/series');
	});

	test('navigate to "/movies" when "Popular Movies" card is clicked', () => {
		const { getByRole } = render(
			<Router>
				<Home />
			</Router>
		);
		const seriesLink = getByRole('link', { name: /popular movies/i });
		fireEvent.click(seriesLink);
		expect(window.location.pathname).toBe('/movies');
	});
});
