import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import HotelCard from '../components/HomePage/HotelCard';
import './styles/HomePage.css';
import FilterByCity from '../components/HomePage/FilterByCity';
import FilterByPrice from '../components/HomePage/FilterByPrice';
import FilterByName from '../components/HomePage/FilterByName';

const HomePage = () => {
	const [priceFiltered, setPriceFiltered] = useState({
		from: 0,
		to: Infinity,
	});
	const [nameFiltered, setNameFiltered] = useState('');
	const products = useSelector((states) => states.products);
	const dispatch = useDispatch();

	useEffect(() => {
		const urlHotels = 'https://hotels-api.academlo.tech/hotels';
		dispatch(getProductsThunk(urlHotels));
	}, [nameFiltered]);

	const callbackFilter = (hotel) => {
		const filterName = hotel.name.toLowerCase().trim().includes(nameFiltered);
		const price = +hotel.price;
		const filterByPrice =
			price >= priceFiltered.from && price <= priceFiltered.to;

		return filterName && filterByPrice;
	};
	return (
		<section className="home__container">
			<article className="home__filters ">
				<h4 className="filter__title">Filters</h4>
				<div className='filter__components flex-container'>
					<FilterByPrice setPriceFiltered={setPriceFiltered} />
					<FilterByCity
						setNameFiltered={setNameFiltered}
						setPriceFiltered={setPriceFiltered}
					/>
				</div>
			</article>
			<article className="form__container">
				<FilterByName setNameFiltered={setNameFiltered} />
			</article>
			
			<article className="hotels__container flex-container">
				{products?.filter(callbackFilter).map((hotel) => (
					<HotelCard key={hotel.id} hotel={hotel} />
				))}
			</article>
		</section>
	);
};

export default HomePage;
