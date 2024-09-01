import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
	name: 'products',
	initialState: null,
	reducers: {
		setProducts: (states, action) => action.payload,
	},
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

//Middleware
export const getProductsThunk = (url) => (dispatch) => {
	axios
		.get(url)
		.then((res) => dispatch(setProducts(res.data)))
		.catch((err) => console.log(err));
};
