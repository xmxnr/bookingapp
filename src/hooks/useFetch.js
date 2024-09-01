import axios from 'axios';
import { useState } from 'react';

const useFetch = () => {
	const [searchHotel, setSearchHotel] = useState(null);

	const getData = (url) => {
		axios
			.get(url)
			.then((res) => {
				setSearchHotel(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return [searchHotel, getData];
};

export default useFetch;
