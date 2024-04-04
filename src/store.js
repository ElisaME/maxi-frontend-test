import { configureStore } from '@reduxjs/toolkit';
import seriesReducer from './reducers/seriesSlice';
import moviesReducer from './reducers/moviesSlice';
import modalReducer from './reducers/modalSlice';

const store = configureStore({
	reducer: {
		series: seriesReducer,
		movies: moviesReducer,
		modal: modalReducer,
	},
});

export default store;
