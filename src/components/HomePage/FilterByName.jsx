import React, { useRef } from 'react';

const FilterByName = ({ setNameFiltered }) => {
	
    const handleSubmit = (e) => {
		e.preventDefault();
		setNameFiltered(searchedName.current.value.trim().toLowerCase());
	};

	const searchedName = useRef();

	return (
		<article>
			<form onSubmit={handleSubmit}>
				<input type="text" ref={searchedName} />
				<button>Search</button>
			</form>
		</article>
	);
};

export default FilterByName;
