import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import StarGenerator from '../components/shared/StarGenerator';
import useCrud from '../hooks/useCrud';
import OtherHotels from '../components/HotelInfo/OtherHotels';
import HotelMap from '../components/HotelInfo/HotelMap';
import './styles/HotelInfo.css';
import { set } from 'react-hook-form';
import FormReservations from '../components/HotelInfo/FormReservations';
import Reviews from '../components/HotelInfo/Reviews';

const HotelInfo = () => {
	const { id } = useParams();
	const [carrouselImage, setCarrouselImage] = useState(0);
	const [hotel, getHotel] = useFetch();
	
	useEffect(() => {
		const url = `https://hotels-api.academlo.tech/hotels/${id}`;
		getHotel(url);
	}, [id]);

	return (
		<section className="hotelinfo__container flex-container">
			<h2 className="hotelinfo__name">{hotel?.name}</h2>
			<div className="hotelinfo__rating">
				{hotel?.rating && <StarGenerator rating={hotel?.rating} />}
				<span>{hotel?.rating}</span>
			</div>
			<div className="hotelinfo__graphics">
				<div className="hotelinfo__carrusel">
					<button
						onClick={() =>
							setCarrouselImage((carrouselImage) => {
								if (carrouselImage > 0) {
									carrouselImage - 1;
								}
							})
						}
					>
						<i className="bx bxs-chevron-left"></i>
					</button>
					<img src={hotel?.images[carrouselImage].url} alt={hotel?.name} />
					<button
						onClick={() => {
							if (carrouselImage < 8) {
								carrouselImage + 1;
							}
						}}
					>
						<i className="bx bxs-chevron-right"></i>
					</button>
				</div>
			</div>
			<div className="hotelinfo__map">
				{hotel && <HotelMap lat={hotel?.lat} lon={hotel?.lon} />}
			</div>
			<div>{`${hotel?.city.name}, ${hotel?.city.country}`}</div>
			<div className="hotelinfo__adress">
				{<i className="bx bxs-map"> </i>} <address>{hotel?.address}</address>
			</div>
			<p className="hotelinfo__description">{hotel?.description}</p>
			<div>
				{localStorage.getItem('token') ? (
					<section>
						<FormReservations hotelId={hotel?.id} />
					</section>
				) : (
					<p>
						If you want to make a reservation please{' '}
						<span>
							<Link to={'/login'}>log in</Link>
						</span>
					</p>
				)}
			</div>
				<Reviews id = {id}/>
			<div>
				<h3>
					<OtherHotels
						city={hotel?.city}
						id={hotel?.id}
						className="hotelinfo__cards"
					/>
				</h3>
			</div>
		</section>
	);
};

export default HotelInfo;
