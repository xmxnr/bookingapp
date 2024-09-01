import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../../store/slices/products.slice';
import './styles/FilterByCity.css'

const FilterByCity = ({ setNameFiltered, setPriceFiltered }) => {
	const [cities, getcities] = useFetch();
	const dispatch = useDispatch();

	useEffect(() => {
		const url = 'https://hotels-api.academlo.tech/cities';
		getcities(url);
	}, []);

	const handleCities = (cityId) => {
		const url = `https://hotels-api.academlo.tech/hotels${
			cityId ? `?cityId=${cityId}` : ' '
		}`;
		dispatch(getProductsThunk(url));
		setNameFiltered('');
		setPriceFiltered({
			from: 0,
			to: Infinity,
		});
	};
	return (
		<article className='Bycity__container'>
			<h4 className='bycity__title'>Cities</h4>
			<ul>
				<li onClick={() => handleCities}>All Cities</li>
				{cities?.map((city) => (
					<li onClick={() => handleCities(city.id)} key={city.name}>
						{city.name}
					</li>
				))}
			</ul>
		</article>
	);
};

export default FilterByCity;
