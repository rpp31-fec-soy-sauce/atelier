import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectReviews, selectReviewsMeta } from '../../store/selectors';
import ReviewListHeader from './components/ReviewListHeader.jsx';

const Ratings = () => {

  const dispatch = useDispatch();
  const { loadReviews, loadReviewsMeta } = bindActionCreators(apiActions, dispatch);


  useEffect(() => {
    loadReviews();
    loadReviewsMeta();
  }, []);

  const reviews = useSelector(selectReviews);
  const reviewAggregates = useSelector(selectReviewsMeta);

  

  return (
    <div>
      <h1>Ratings & Reviews</h1>
        <div>
          <span>
            <ReviewListHeader ratingsAgg={reviewAggregates}/>
          </span>
          <span></span>
        </div>
      
      
      <p>{JSON.stringify(reviewAggregates)}</p>
      <h3>Reviews</h3>
      <p>{JSON.stringify(reviews)}</p>
    </div>
  );
};

export default Ratings;
