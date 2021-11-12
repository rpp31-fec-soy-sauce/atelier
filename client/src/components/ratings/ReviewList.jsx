import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectTotalReviewCount } from '../../store/selectors';
import ReviewTiles from './ReviewTiles.jsx'
import { ReviewListHeader, ReviewListFooter } from './styles/Container.style'
import Button from '../styles/Button.styled.js'
import { FilterSelect } from './styles/Item.style'

const ReviewList = () => {

  const dispatch = useDispatch();

  const reviewCountTotals = useSelector(selectTotalReviewCount);
  const { loadReviews } = bindActionCreators(apiActions, dispatch);

  const [filter, setFilter] = useState('relevant');
  const [reviewDisplayCount, setReviewDisplayCount] = useState(2);

  return (
  <>
      <ReviewListHeader>
        <h2>{reviewCountTotals} reviews, sorted by  
          <FilterSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
            <option value="relevant">relevant</option>
          </FilterSelect>
        </h2>
      </ReviewListHeader> 
      <ReviewTiles displayCount={reviewDisplayCount} />
      <ReviewListFooter>
        <div> {reviewDisplayCount === reviewCountTotals || reviewCountTotals === 0 ? null : <Button role="moreReviews" onClick={ 
            () => {
              if (reviewCountTotals - reviewDisplayCount < 2) {
                setReviewDisplayCount(reviewCountTotals)
              } else {
                setReviewDisplayCount(reviewDisplayCount + 2)
              }
            }}>More Reviews
          </Button>}
        </div>
        <div><Button>Add Review</Button></div>
      </ReviewListFooter>  
  </>
  )
}

export default ReviewList;