import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home';
import Movies from './components/movies';
import Series from './components/series';
import { Provider } from 'react-redux';
import store from './store';
import Modal from './components/modal';
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/series" element={<Series />} />
						<Route path="/movies" index element={<Movies />} />
					</Route>
				</Routes>

				<Modal />
			</div>
		</Provider>
	);
}

export default App;
