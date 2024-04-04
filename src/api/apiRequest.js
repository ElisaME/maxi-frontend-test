export const getSeries = (data) => {
	const { year } = data;
	return fetch(
		`http://localhost:4000/entries?programType=series&releaseYear${
			year ? `=${year}` : '_gte=2010'
		}&_limit=20&_sort=title`
	)
		.then((res) => {
			if (!res.ok) {
				throw Error('Error fetching series data');
			}
			return res.json();
		})
		.catch((error) => console.log('error', error));
};

export const getMovies = (data) => {
	const { year } = data;
	return fetch(
		`http://localhost:4000/entries?programType=movie&releaseYear${
			year ? `=${year}` : '_gte=2010'
		}&_limit=20&_sort=title`
	)
		.then((res) => {
			if (!res.ok) {
				throw Error('Error fetching movies data');
			}
			return res.json();
		})
		.catch((error) => console.log('error', error));
};
