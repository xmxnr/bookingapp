import { Map, Marker } from 'pigeon-maps';
import React from 'react';

const HotelMap = ({ lat, lon }) => {
	return (
		<Map width={300} height={300} center={[+lat, +lon]}>
			<Marker width={50} anchor={[+lat, +lon]} color='#ea4959' />
		</Map>
	);
};

export default HotelMap;
