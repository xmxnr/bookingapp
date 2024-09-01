import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/FilterByPrice.css'

const FilterByPrice = ({setPriceFiltered}) => {
	const { handleSubmit, register, reset } = useForm();
	const submit = (data) => {
        const from = +data.from
        const to = +data.to

        setPriceFiltered({
            from: data.from ? from : 0,
            to: data.to ? to : Infinity
        })
        reset ({
            from:'',
            to:''
        })
    };
	return (
		<article className='byprice__container flex-container'>
			<h4 className='byprice__title'>Price</h4>
			<form onSubmit={handleSubmit(submit)}>
				<label className='byprice__from grid-container'>
					<span>From</span>
					<input {...register('from')} type="number" />
				</label>
				<label className='byprice__to grid-container'>
					<span>To</span>
					<input {...register('to')} type="number" />
				</label>
				<button className='byprice__btn'>Search</button>
			</form>
		</article>
	);
};

export default FilterByPrice;
