import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadReviews, loadReviewsMeta } from '../../store/apiActions';
import { selectReviews, selectReviewsMeta } from '../../store/selectors';

const Ratings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadReviews());
    dispatch(loadReviewsMeta());
  }, []);

  const reviews = useSelector(selectReviews);
  const meta = useSelector(selectReviewsMeta);

  return (
    <div>
      <h1>Ratings</h1>
      <h3>Reviews Meta</h3>
      {/* <p>{JSON.stringify(meta)}</p> */}
      <h3>Reviews</h3>
      {/* <p>{JSON.stringify(reviews)}</p> */}
    </div>
  );
};

export default Ratings;
