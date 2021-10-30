import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../store/apiActions';
import { selectReviews } from '../../store/selectors';
import { ReviewTile, ReviewTileHeader, ReviewTilesListContainer, ReviewTileBody, ReviewTileFooter, ReviewTileBodyResponse } from './styles/Container.style'
import { ReviewTileItem, ReviewTileBodyItem } from './styles/Item.style'
import StarRatingStatic from '../universal_components/StarRatingStatic.jsx'

const ReviewTiles = () => {

  const reviews = useSelector(selectReviews);

  const reviewTileConstructor = reviews.map(review => {
    let dateStr =new Date(review.date);
    let convertedDate = dateStr.toLocaleDateString();
    
    return (
      <ReviewTile key={review.review_id}>
        <ReviewTileHeader>
          <ReviewTileItem>
            <StarRatingStatic averageRating={review.rating}/>
          </ReviewTileItem>
          <ReviewTileItem>
            {review.reviewer_name}, {convertedDate}
          </ReviewTileItem>
        </ReviewTileHeader>
        <ReviewTileBody>
          <ReviewTileBodyItem>{review.summary}</ReviewTileBodyItem>
          <ReviewTileBodyItem>{review.body}</ReviewTileBodyItem>
          <ReviewTileBodyItem>{review.recommend}</ReviewTileBodyItem>
          <ReviewTileBodyItem>
            {review.response ? <ReviewTileBodyResponse>{review.response}</ReviewTileBodyResponse> : null}
          </ReviewTileBodyItem>
        </ReviewTileBody>
        <ReviewTileFooter>
          <ReviewTileItem>Helpful? YES (make clickable) ({review.helpfulness}) |</ReviewTileItem>
          <ReviewTileItem>Report (make clickable)</ReviewTileItem>
        </ReviewTileFooter>
      </ReviewTile>
    )
  })

  return (<ReviewTilesListContainer>{reviewTileConstructor}</ReviewTilesListContainer>)
}


export default ReviewTiles