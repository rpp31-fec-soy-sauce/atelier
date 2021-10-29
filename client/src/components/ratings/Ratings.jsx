import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectReviews, selectReviewsMeta } from '../../store/selectors';
import ReviewList from './components/ReviewList.jsx';
import { RatingsContainer, RatingsBreakdown, ReviewListContainer, AverageRatingContainer } from './components/Container.style'

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
      <h3>RATINGS & REVIEWS</h3>
      <RatingsContainer>
          <RatingsBreakdown>
            <AverageRatingContainer>
              <div>3.5</div>
              <div>Stars Rating</div>
            </AverageRatingContainer>
            <div>% of Reviews Recommended</div>
            <div>Rating Breakdown</div>
            <div>Product Breakdown</div>
          </RatingsBreakdown>
          <ReviewListContainer>
            <ReviewList />
          </ReviewListContainer>
      </RatingsContainer>
    </div>
  );
};

export default Ratings;
