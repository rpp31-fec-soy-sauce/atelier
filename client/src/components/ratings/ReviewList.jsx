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

  const reviewCountTotals = useSelector(selectTotalReviewCount);

  const [filter, setFilter] = useState('relevant');

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
      <ReviewTiles />
      <ReviewListFooter>
        <div><Button>More Reviews</Button></div>
        <div><Button>Add Review</Button></div>
      </ReviewListFooter>  
  </>
  )
}

export default ReviewList;