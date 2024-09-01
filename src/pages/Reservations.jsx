import React, { useEffect } from 'react';
import useCrud from '../hooks/useCrud';
import BookCard from '../components/ReservationPage.jsx/BookCard';
import './styles/Reservations.css'

const Reservations = () => {
	const [reservations, getReservations, , deleteReservation] = useCrud();

	useEffect(() => {
		const url = 'https://hotels-api.academlo.tech/bookings';
		getReservations(url, true);
	}, []);

	return (
		<section className='reservations__container'>
			<h2 className='reservations__title'>Reservations</h2>
			<div className='reservations__cards flex-container'>
				{reservations?.map((book) => (
					<BookCard
						key={book.id}
						book={book}
						deleteReservation={deleteReservation}
						reservations={reservations}
					/>
				))}
			</div>
		</section>
	);
};

export default Reservations;
