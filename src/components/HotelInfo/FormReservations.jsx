import React from 'react';
import { useForm } from 'react-hook-form';
import useCrud from '../../hooks/useCrud';
import { useNavigate } from 'react-router-dom';

const FormReservations = ({ hotelId }) => {
	const { reset, handleSubmit, register } = useForm();
	const [, , createBooking] = useCrud();
    const navigate = useNavigate()

	const submit = (data) => {
		const url = 'https://hotels-api.academlo.tech/bookings';

        const objData = {...data, hotelId}

        createBooking(url, objData , true )
		reset({
			checkIn: '',
			checkOut: '',

		});

        navigate('/reservations')
	};
	return (
		<form onSubmit={handleSubmit(submit)}>
			<h3>Make you reservation</h3>
			<label>
				<span>Check In</span>
				<input type="date" {...register('checkIn')} />
			</label>
			<label>
				<span>Check Out</span>
				<input type="date" {...register('checkOut')} />
			</label>
			<button>Reserve</button>
		</form>
	);
};

export default FormReservations;
