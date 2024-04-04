import React from 'react';
import {
	fireEvent,
	getDefaultNormalizer,
	render,
	waitFor,
} from '@testing-library/react';
import Series from '.';

import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import { Provider } from 'react-redux';
import Modal from '../modal';

// Mock de datos de series
const seriesData = [
	{
		title: '11.22.63',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		programType: 'series',
		images: {
			'Poster Art': {
				url: 'https://streamcoimg-a.akamaihd.net/000/120/40/12040-PosterArt-2a08532d986336771ea5a70658b6a957.jpg',
				width: 400,
				height: 600,
			},
		},
		releaseYear: 2016,
		id: 'a6c4',
	},
	{
		title: 'Acquitted',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		programType: 'series',
		images: {
			'Poster Art': {
				url: 'https://streamcoimg-a.akamaihd.net/000/108/70/10870-PosterArt-c37e8232f327b27bc62043ea627ca528.jpg',
				width: 1000,
				height: 1500,
			},
		},
		releaseYear: 2015,
		id: '26bd',
	},
	{
		title: 'Almost Royal',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		programType: 'series',
		images: {
			'Poster Art': {
				url: 'https://streamcoimg-a.akamaihd.net/000/124/27/12427-PosterArt-92cd41fc035a71a5e5f6cc7569b4266e.jpg',
				width: 1000,
				height: 1500,
			},
		},
		releaseYear: 2014,
		id: 'e765',
	},
];

describe('Series component', () => {
	test('renders without crashing', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<Series />
				</Router>
			</Provider>
		);
	});

	test('displays series data', async () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<Series />
				</Router>
			</Provider>
		);

		await waitFor(() => {
			seriesData.forEach((serie) => {
				const titleRegExp = new RegExp(serie.title, 'i');
				expect(
					getByText(titleRegExp, {
						normalizer: getDefaultNormalizer({ trim: false }),
					})
				).toBeInTheDocument();
			});
		});
	});

	test('open modal with series details when series title is clicked', async () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<Router>
					<Series />
					<Modal />
				</Router>
			</Provider>
		);

		await waitFor(() => {
			seriesData.forEach((serie) => {
				// Click on serie title
				fireEvent.click(getByTestId(`fireEvent-${serie.id}`));

				// Verify modal
				const modal = getByTestId(`title-${serie.id}`); // Asegúrate de que tu modal tenga un atributo de test (por ejemplo, data-testid) para que puedas seleccionarlo
				expect(modal).toBeInTheDocument();
			});
		});
	});
});
