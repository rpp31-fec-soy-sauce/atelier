import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../../store/apiActions';
import { selectTotalReviewCount } from '../../../store/selectors';
import ReviewTiles from './ReviewTiles.jsx'
import { ReviewListHeader, ReviewListFooter} from './Container.style'
import { Button } from './Item.style'

const ReviewList = () => {
  
  const dispatch = useDispatch();
  const { loadReviewsMeta } = bindActionCreators(apiActions, dispatch);


  useEffect(() => {
    loadReviewsMeta();
  }, []);

  const reviewCountTotals = useSelector(selectTotalReviewCount);

  return (
  <>
      <ReviewListHeader>
        <h2>{reviewCountTotals} reviews, sorted by relevance (make drop down)</h2>
      </ReviewListHeader> 
      <ReviewTiles />
      <ReviewListFooter>
        <Button>More Reviews</Button>
        <Button>Add Review</Button>
      </ReviewListFooter>  
  </>
  )
}

export default ReviewList;