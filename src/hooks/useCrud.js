import axios from 'axios';
import { useEffect, useState } from 'react';
import getConfigToken from '../services/getConfigToken';


const useCrud = (path) => {
	const [response, setResponse] = useState();

	const getData = (url, withToken) => {
		axios
			.get(url, withToken ? getConfigToken() : {})
			.then((res) => setResponse(res.data))
			.catch((err) => {
				console.log(err);
				//401 NO ESTA AUTORIZADO 403 EL TOKEN EXPIRO
				if (err?.response.status === 401 || err?.response.status === 403) {
					localStorage.removeItem('token');
					localStorage.removeItem('userLogged');
				}
			});
	};

	const postData = (url, data, withToken) => {
		axios
			.post(url, data, withToken ? getConfigToken() : {})
			.then((res) => {
				setResponse(response ? [...response, res.data] : [res.data]);
			})
			.catch((err) => console.log(err));
	};

	const deleteData = (url, id, withToken) => {
		axios
			.delete(url, id, withToken ? getConfigToken() : {})
			.then((res) => {
				setResponse(response.filter((elem) => elem.id !== res.id));
			})
			.catch((err) => console.log(err));
	};

	const updateData = (id, data) => {
		const url = `${BASE_URL}${path}${id}`;
		axios
			.patch(url, data)
			.then((res) => {
				setResponse(response.map((elem) => (elem.id === id ? res.data : elem)));
			})
			.catch((err) => console.log(err));
	};

	return [response, getData, postData, deleteData, updateData];
};

export default useCrud;
