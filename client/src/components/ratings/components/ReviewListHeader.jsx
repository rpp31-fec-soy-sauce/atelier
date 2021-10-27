import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../../store/apiActions';
import { selectReviews, selectReviewsMeta } from '../../../store/selectors';

const ReviewListHeader = (props) => {
  
  const dispatch = useDispatch();
  const { loadReviewsMeta } = bindActionCreators(apiActions, dispatch);


  useEffect(() => {
    loadReviewsMeta();
  }, []);

  const reviewAggregates = useSelector(selectReviewsMeta);

  const reviewCount = (reviewRatingsObject = 0) => { 
    let totalReviewCount = 0;
    if (reviewRatingsObject !== 0) {
      Object.values(reviewRatingsObject).forEach((value) => {
        totalReviewCount += parseInt(value);
      });
    }

    return totalReviewCount;
  }

  const reviewCountTotal = reviewCount(reviewAggregates.ratings);

  return (<h2>{reviewCountTotal} reviews, sorted by relevance</h2>)
}

export default ReviewListHeader;