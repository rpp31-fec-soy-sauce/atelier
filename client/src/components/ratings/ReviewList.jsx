import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectTotalReviewCount } from '../../store/selectors';
import ReviewTiles from './ReviewTiles.jsx'
import { ReviewListHeader, ReviewListFooter} from './styles/Container.style'
import Button from '../styles/Button.styled.js'

const ReviewList = () => {

  const reviewCountTotals = useSelector(selectTotalReviewCount);

  return (
  <>
      <ReviewListHeader>
        <h2>{reviewCountTotals} reviews, sorted by relevance (make drop down)</h2>
      </ReviewListHeader> 
      <ReviewTiles />
      <ReviewListFooter>
        <div><Button>More Reviews</Button></div>
        <div><Button>Add Review</Button></div>
      </ReviewListFooter>  
  </>
  )
}

export default ReviewList;