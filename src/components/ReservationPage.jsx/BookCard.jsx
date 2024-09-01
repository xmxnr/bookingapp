import React, { useEffect } from 'react';
import './styles/BookCard.css';

const BookCard = ({ book, deleteReservation}) => {
	const cIn = new Date(book.checkIn);
	const out = new Date(book.checkOut);
	const minus = out - cIn;
	const days = minus / (1000 * 60 * 60 * 24);

  const handleDelete = () => {
      const url = `https://hotels-api.academlo.tech/bookings/${book.id}`
      deleteReservation(url, book.id, true)
  }
  
  

  

	return (
		<article className="booking__container flex-container">
			<img
				src={book.hotel.images[0].url}
				alt={book.hotel.name}
				className="booking__img"
			/>
			<div className='booking__info'>
				<h2 className='hotel__name'>{book.hotel.name}</h2>
				<p className='hotel__city'>
					{book.hotel.city.name}, {book.hotel.city.country}
				</p>
			</div>
      <div className='hotel__counts'>
			<span>Reservation Days: </span><span className='counts__value'>{days}</span>
			<span>Subtotal Price: </span><span className='counts__value'>${days * book.hotel.price}</span>
      </div>
			<button className='reservations__btn' onClick={handleDelete}>
				<i className="bx bxs-trash"></i>
			</button>
		</article>
	);
};

export default BookCard;
