import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import StarGenerator from '../shared/StarGenerator';

const Reviews = ({ id }) => {
  const [showedComments, setShowedComments] = useState(5)
	const [reviewsHotel, getReviewsHotel] = useFetch();

	useEffect(() => {
		const url = `https://hotels-api.academlo.tech/reviews?hotelId=${id}`;
		getReviewsHotel(url);
	}, [id]);

	console.log(reviewsHotel);
  
  const handleReviews = () => {
    setShowedComments((prevCount) => prevCount + 5)
  }

	return (
		<div>
			<h3>Comments</h3>
			<div>
				{reviewsHotel?.results.slice(0, showedComments).map((review) => (
					<ul key={review.id}>
						<li>{review.user.firstName}</li>
						<li>
							<StarGenerator rating={review.rating} /> {review.rating}
						</li>
            <li>{review.comment}</li>
					</ul>
				))}
			</div>
      {
        showedComments < reviewsHotel?.results.length && <button onClick={handleReviews}>Show More ...</button>
      }
		</div>
	);
};

export default Reviews;
