import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import './styles/HotelCard.css'
import StarGenerator from '../shared/StarGenerator';

const HotelCard = ({ hotel }) => {
	const navigate = useNavigate();

	const handleNavigate = (e) => {
		navigate(`/hotels/${hotel.id}`);
	};

	return (
		<article className="hotel">
			<header className="hotel__header">
				<img
					src={hotel.images[0].url}
					alt={hotel.name}
					className="hotel__image"
				/>
			</header>
			<section className="hotel__body">
				<h3 className="hotel__name">{hotel?.name}</h3>
				<div className="flex-container hotel__raiting">
					<StarGenerator rating={hotel.rating}/>
					<span className="hotel__raiting--value">{hotel?.rating}</span>
				</div>
				<div className="hotel__city">{`${hotel?.city.name}, ${hotel?.city.country}`}</div>
				<div className="hotel__price">{`$${hotel?.price}`}</div>
				<button onClick={handleNavigate} className="hotel__btn">
					See More...
				</button>
			</section>
		</article>
	);
};

export default HotelCard;
