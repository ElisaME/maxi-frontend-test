import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSeries } from '../api/apiRequest';

const initialState = {
	series: [],
	loading: false,
	error: null,
};

const seriesSlice = createSlice({
	name: 'series',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSeries.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchSeries.fulfilled, (state, action) => {
				state.loading = false;
				state.series = action.payload;
				state.error = null;
			})
			.addCase(fetchSeries.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const fetchSeries = createAsyncThunk(
	'series/fetchSeries',
	async (data) => {
		const response = await getSeries(data);
		return response;
	}
);

export default seriesSlice.reducer;
