import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [userLogged, setUserLogged] = useState();
	const { handleSubmit, reset, register } = useForm();
	const { loginUser } = useAuth();
	const navigate = useNavigate();

	const submit = (data) => {
		loginUser(data);
		reset({
			email: '',
			password: '',
		});
		navigate('/');
	};

	const handleLogOut = () => {
		localStorage.removeItem('userLogged');
		localStorage.removeItem('token');
		navigate('/');
	};

	useEffect(() => {
		const userFromLocalStorage = localStorage.getItem('userLogged');
		if (userFromLocalStorage) {
			const parsedUser = JSON.parse(userFromLocalStorage);
			setUserLogged(parsedUser);
		}
	}, []);

	return (
		<section>
			{userLogged ? (
				<div className="logout__container flex-container">
					<h2 className="welcome__title">
						{`Welcome, `}{' '}
						<span className="welcome__title--name">
							{userLogged.firstName} {userLogged.lastName}
						</span>
					</h2>
					<button className="welcome__btn--logout" onClick={handleLogOut}>
						Log Out
					</button>
				</div>
			) : (
				<div>
					<form
						onSubmit={handleSubmit(submit)}
						className="form__input-container flex-container"
					>
						<div className="login__logo">
							<i className="bx bxs-user-circle"></i>
						</div>
						<h2 className="form__title">Login User</h2>
						<div className="container__form flex-container">
							<label className="form__label">
								<span>Email</span>
								<input type="email" {...register('email')} />
							</label>
							<label className="form__label">
								<span>Password</span>
								<input type="password" {...register('password')} />
							</label>
						</div>
						<button>Log In</button>
					</form>
				</div>
			)}
		</section>
	);
};

export default Login;
