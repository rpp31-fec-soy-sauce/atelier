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
<<<<<<< HEAD

      <h1>Ratings Reviews</h1>
        <div>
          <span>
            <ReviewListHeader ratingsAgg={reviewAggregates}/>
          </span>
          <span></span>
        </div>


      {/* <p>{JSON.stringify(reviewAggregates)}</p> */}
      <h3>Reviews</h3>
      {/* <p>{JSON.stringify(reviews)}</p> */}
=======
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
>>>>>>> 045a5c6e869935c65d41880badf13cffcc8162ee
    </div>
  );
};

export default Ratings;
