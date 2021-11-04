import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectReviews } from '../../store/selectors';
import { ReviewTile, ReviewTileHeader, ReviewTilesListContainer, ReviewTileBody, ReviewTileFooter, ReviewTileBodyResponse } from './styles/Container.style'
import { ReviewTileItem, ReviewTileBodyItem, checkbox } from './styles/Item.style'
import StarRatingStatic from '../universal_components/StarRatingStatic.jsx'
import check_box from '../../../assets/check_box.png'

const ReviewTiles = () => {

  const reviews = useSelector(selectReviews);

  const reviewTileConstructor = reviews.map(review => {
    let dateStr =new Date(review.date);
    let convertedDate = dateStr.toLocaleDateString();
    
    return (
      <ReviewTile key={review.review_id}>
        <ReviewTileBody>
          <ReviewTileBodyItem>
            <StarRatingStatic averageRating={review.rating}/>
          </ReviewTileBodyItem>
          <ReviewTileBodyItem>
            {review.reviewer_name}, {convertedDate}
          </ReviewTileBodyItem>
          <ReviewTileBodyItem>{review.summary}</ReviewTileBodyItem>
          <ReviewTileBodyItem>{review.body}</ReviewTileBodyItem>
          {review.recommend ? <ReviewTileBodyItem>
            <img data-testid="checkbox" className="checkbox" src={check_box}></img> 
            I recommend this product
            </ReviewTileBodyItem> : null}
          {review.response ? <ReviewTileBodyResponse>{review.response}</ReviewTileBodyResponse> : null}
          <ReviewTileBodyItem>Helpful? YES (make clickable) ({review.helpfulness}) | </ReviewTileBodyItem>
          <ReviewTileBodyItem>Report (make clickable)</ReviewTileBodyItem>
        </ReviewTileBody>
      </ReviewTile>
    )
  })

  return (<ReviewTilesListContainer>{reviewTileConstructor}</ReviewTilesListContainer>)
}


export default ReviewTiles