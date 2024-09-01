import React, { useState } from 'react';
import './styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleMenu = () => {
		setIsOpenMenu(!isOpenMenu);
	};

	const closeMenu = () => {
		setIsOpenMenu(false);
	};
	
	return (
		<header className="header__nav flex-container">
			<h1 className="header__title">
				<Link to={'./'}>Booking App</Link>
			</h1>
			<div className="header__menu" onClick={handleMenu}>
				<i className="bx bx-menu"></i>
			</div>
			<nav className={`header__nav ${isOpenMenu || 'nav__close'}`}>
				<ul className="header__nav-ul flex-container">
					<Link to={'/reservations'}>
						<li onClick={closeMenu} className="header__link">
							Reservation
						</li>
					</Link>
					<Link to={'./register'}>
						<li onClick={closeMenu} className="header__link">
							Register
						</li>
					</Link>
					<Link to={'/login'}>
						<li onClick={closeMenu} className="header__link">
							Login
						</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
