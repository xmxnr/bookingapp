import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HotelInfo from './pages/HotelInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import Reservations from './pages/Reservations';
import NavBar from './components/shared/NavBar';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
	return (
		<div className="app__container">
			<nav>
				<NavBar />
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/hotels/:id" element={<HotelInfo />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/reservations" element={<Reservations />} />
				</Route>
			</Routes>
			<footer>
				<p>
					<i className="bx bx-registered"></i> Todos los derechos reservados
				</p>
			</footer>
		</div>
	);
}

export default App;
