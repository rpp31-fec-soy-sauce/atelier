import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectReviews, selectReviewsMeta, selectTotalReviewCount } from '../../store/selectors';
import ReviewList from './ReviewList.jsx';
import { RatingsContainer, RatingsAndProductBreakdownContainer, ReviewListContainer } from './styles/Container.style'
import RatingsBreakdown from './RatingsBreakdown.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'

const Ratings = () => {

  const dispatch = useDispatch();
  const { loadReviews, loadReviewsMeta } = bindActionCreators(apiActions, dispatch);


  useEffect(() => {
    loadReviewsMeta();
    loadReviews(1, 10);
  }, []);

  return (
    <div>
      <h3>RATINGS & REVIEWS</h3>
      <RatingsContainer>
        <RatingsAndProductBreakdownContainer>
          <RatingsBreakdown />
          <ProductBreakdown />
        </RatingsAndProductBreakdownContainer>
        <ReviewListContainer>
          <ReviewList />
        </ReviewListContainer>
      </RatingsContainer>
    </div>
  );
};

export default Ratings;
