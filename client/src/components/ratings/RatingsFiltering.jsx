import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectReviews, selectReviewsMeta } from '../../store/selectors';
import { RatingsFilteringItem } from './styles/Item.style'

const RatingsFiltering = () => {

  const dispatch = useDispatch();
  const { loadReviews, loadReviewsMeta } = bindActionCreators(apiActions, dispatch);

  useEffect(() => {
    loadReviews();
    loadReviewsMeta();
  }, []);

  const reviews = useSelector(selectReviews);
  const reviewAggregates = useSelector(selectReviewsMeta);

  return (
    <>
      <RatingsFilteringItem>5 Star</RatingsFilteringItem>
      <RatingsFilteringItem>4 Star</RatingsFilteringItem>
      <RatingsFilteringItem>3 Star</RatingsFilteringItem>
      <RatingsFilteringItem>2 Star</RatingsFilteringItem>
      <RatingsFilteringItem>1 Star</RatingsFilteringItem>
    </>
  );
};

export default RatingsFiltering;