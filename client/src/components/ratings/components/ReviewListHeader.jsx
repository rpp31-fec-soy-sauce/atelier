import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../../store/apiActions';
import { selectReviewsMeta, selectTotalReviewCount } from '../../../store/selectors';

const ReviewListHeader = (props) => {

  const dispatch = useDispatch();
  const { loadReviewsMeta } = bindActionCreators(apiActions, dispatch);


  useEffect(() => {
    loadReviewsMeta();
  }, []);

  const reviewCountTotals = useSelector(selectTotalReviewCount);

  return (<h2>{reviewCountTotals} reviews, sorted by relevance</h2>)
}

export default ReviewListHeader;