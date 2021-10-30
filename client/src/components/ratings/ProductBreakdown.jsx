import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectReviews, selectReviewsMeta } from '../../store/selectors';
import {} from './styles/Container.style'

const ProductBreakdown = () => {


  const reviews = useSelector(selectReviews);
  const reviewAggregates = useSelector(selectReviewsMeta);

  return (
    <div>Product Breakdown</div>
  );
};

export default ProductBreakdown;