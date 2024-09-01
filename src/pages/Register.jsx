import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './styles/Register.css'

const Register = () => {
	const { createUser } = useAuth();
	const { handleSubmit, register, reset, formState } = useForm({
		mode: 'onChange',
	});

	const submit = (data) => {
		createUser(data);
		reset({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			gender: 'male',
		});
	};

	return (
		<article>
			<form onSubmit={handleSubmit(submit)} className='form__register-container flex-container'>
				<h2 className='form__title'>Register</h2>
				<div className='form__input--container flex-container'>
					<label className='form__label'>
						<span>First Name</span>
						<input type="text" {...register('firstName')} />
					</label>
					<label className='form__label'>
						<span>Last Name</span>
						<input type="text" {...register('lastName')} />
					</label>
					<label className='form__label'>
						<span>Email</span>
						<input type="email" {...register('email')} />
					</label>
					<label className='form__label'>
						<span>Password</span>
						<input type="password" {...register('password')} />
					</label>
					<label className='form__label'>
						<span>Gender</span>
						<select {...register('gender')}>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</label>
				</div>
				<button>Submit</button>
			</form>
		</article>
	);
};

export default Register;
