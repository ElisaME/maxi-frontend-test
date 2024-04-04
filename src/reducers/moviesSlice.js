import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../api/apiRequest';

const initialState = {
	movies: [],
	loading: false,
	error: null,
};

const moviesSlice = createSlice({
	name: 'series',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.loading = false;
				state.movies = action.payload;
				state.error = null;
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const fetchMovies = createAsyncThunk(
	'series/fetchMovies',
	async (data) => {
		const response = await getMovies(data);
		return response;
	}
);

export default moviesSlice.reducer;
