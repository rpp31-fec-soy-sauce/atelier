import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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