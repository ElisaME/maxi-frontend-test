import React from 'react';
import {
	fireEvent,
	getDefaultNormalizer,
	render,
	waitFor,
} from '@testing-library/react';
import Movies from '.';

import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import { Provider } from 'react-redux';
import Modal from '../modal';

// Mock de datos de Movies
const moviesData = [
	{
		title: 'A Lego Brickumentary',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		programType: 'movie',
		images: {
			'Poster Art': {
				url: 'https://streamcoimg-a.akamaihd.net/000/109/8345/1098345-PosterArt-f0f207e02947ca76d9f9b238aea54dc1.jpg',
				width: 1000,
				height: 1500,
			},
		},
		releaseYear: 2015,
		id: '11a3',
	},
	{
		title: 'Ages Of Love',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		programType: 'movie',
		images: {
			'Poster Art': {
				url: 'https://streamcoimg-a.akamaihd.net/000/372/670/372670-PosterArt-0c1d61510fdf59ff32299038e669db44.jpg',
				width: 350,
				height: 525,
			},
		},
		releaseYear: 2010,
		id: '38a7',
	},
	{
		title: 'American Sniper',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		programType: 'movie',
		images: {
			'Poster Art': {
				url: 'https://streamcoimg-a.akamaihd.net/000/952/708/952708-PosterArt-d3beb37b66819c3f6281d7accc3020d6.jpg',
				width: 1400,
				height: 2100,
			},
		},
		releaseYear: 2015,
		id: 'd36c',
	},
	{
		title: 'Danny Collins',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		programType: 'movie',
		images: {
			'Poster Art': {
				url: 'https://streamcoimg-a.akamaihd.net/000/999/667/999667-PosterArt-65e6f88ede8bdcdad6d4d4f1549936ee.jpg',
				width: 1000,
				height: 1500,
			},
		},
		releaseYear: 2014,
		id: 'b33d',
	},
];

describe('movies component', () => {
	test('renders without crashing', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<Movies />
				</Router>
			</Provider>
		);
	});

	test('displays movies data', async () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<Movies />
				</Router>
			</Provider>
		);

		await waitFor(() => {
			moviesData.forEach((movie) => {
				const titleRegExp = new RegExp(movie.title, 'i');
				expect(
					getByText(titleRegExp, {
						normalizer: getDefaultNormalizer({ trim: false }),
					})
				).toBeInTheDocument();
			});
		});
	});

	test('open modal with Movies details when Movies title is clicked', async () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<Router>
					<Movies />
					<Modal />
				</Router>
			</Provider>
		);

		await waitFor(() => {
			moviesData.forEach((movie) => {
				// Click on movie title
				fireEvent.click(getByTestId(`fireEvent-${movie.id}`));

				// Verify modal
				const modal = getByTestId(`title-${movie.id}`); // Asegúrate de que tu modal tenga un atributo de test (por ejemplo, data-testid) para que puedas seleccionarlo
				expect(modal).toBeInTheDocument();
			});
		});
	});
});
