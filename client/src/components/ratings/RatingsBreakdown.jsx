import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectReviews, selectReviewsMeta, selectAverageRating } from '../../store/selectors';
import { AverageRatingContainer, RatingsFilterBreakdownContainer } from './styles/Container.style';
import { AverageRatingItem } from './styles/Item.style';
import RatingsFiltering from './RatingsFiltering.jsx';

const RatingsBreakdown = () => {

  const reviews = useSelector(selectReviews);
  const reviewAggregates = useSelector(selectReviewsMeta);
  const averageRating = useSelector(selectAverageRating);

  return (
    <>
      <AverageRatingContainer>
        <AverageRatingItem>{averageRating}</AverageRatingItem>
        <AverageRatingItem>Stars</AverageRatingItem>
      </AverageRatingContainer>
      <div>100% recommended this product</div>
      <RatingsFilterBreakdownContainer>
        <RatingsFiltering />
      </RatingsFilterBreakdownContainer>
    </>
  );
};

export default RatingsBreakdown;