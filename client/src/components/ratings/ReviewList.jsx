import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectTotalReviewCount } from '../../store/selectors';
import ReviewTiles from './ReviewTiles.jsx'
import { ReviewListHeader, ReviewListFooter } from './styles/Container.style'
import Button from '../styles/Button.styled.js'
import { FilterSelect } from './styles/Item.style'
import AddReview from './AddReview.jsx'

const ReviewList = () => {

  const dispatch = useDispatch();

  const reviewCountTotals = useSelector(selectTotalReviewCount);
  const { loadReviews, loadReviewsMeta } = bindActionCreators(apiActions, dispatch);

  const [filter, setFilter] = useState('relevant');
  const [reviewDisplayCount, setReviewDisplayCount] = useState(2);

  const handleFilterChange = (e) => {
    let filterValue = e.target.value
    setFilter(filterValue);

    loadReviewsMeta();
    loadReviews(1, 100, filterValue);
  }

  return (
  <>
      <ReviewListHeader>
<<<<<<< HEAD
        <h2>{reviewCountTotals} reviews, sorted by
          <FilterSelect
            value={filter}
=======
        <h2>{reviewCountTotals} reviews, sorted by  
          <FilterSelect
            value={filter} 
>>>>>>> cc19648ecc5e6c55c986e56987742cf348c15d23
            onChange={ (e) => { handleFilterChange(e) }}
            name={'filter_drop_down'}
            data-element={'filter_drop_down'}
            data-module={'review'}
          >
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
            <option value="relevant">relevant</option>
          </FilterSelect>
        </h2>
      </ReviewListHeader>
      <ReviewTiles displayCount={reviewDisplayCount} />
      <ReviewListFooter>
<<<<<<< HEAD
        <div> {reviewDisplayCount === reviewCountTotals || reviewCountTotals === 0 ? null : <Button role="moreReviews" onClick={
            () => {
              if (reviewCountTotals - reviewDisplayCount < 2) {
                setReviewDisplayCount(reviewCountTotals)
              } else {
                setReviewDisplayCount(reviewDisplayCount + 2)
=======
        <div> {reviewDisplayCount === reviewCountTotals || reviewCountTotals === 0 ? null : 
          <Button 
            role="moreReviews"
            name={'moreReviewsButton'}
            data-element={'moreReviewsButton'}
            data-module={'review'} 
            onClick={ 
              () => {
                if (reviewCountTotals - reviewDisplayCount < 2) {
                  setReviewDisplayCount(reviewCountTotals)
                } else {
                  setReviewDisplayCount(reviewDisplayCount + 2)
                }
>>>>>>> cc19648ecc5e6c55c986e56987742cf348c15d23
              }
            }>More Reviews
          </Button>}
        </div>
        <AddReview></AddReview>
      </ReviewListFooter>
  </>
  )
}

export default ReviewList;