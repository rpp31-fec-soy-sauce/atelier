import React, { useState } from 'react';
import { selectProduct } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviewsMeta } from '../../store/selectors';
import Modal from '../styles/Modal';
import Button from '../styles/Button.styled.js'



const AddReview = () => {
  

  const product = useSelector(selectProduct);
  const reviewsAggregates = useSelector(selectReviewsMeta);

  const [showModal, setShowModal] = useState(false);

  const productBreakdownRatingsObject = {};

  const productBreakdownRatingsQualitativeObject = {};

  const [productBreakdownRatings, setProductBreakdownRatings] = useState(productBreakdownRatingsObject);
  const [productBreakdownRatingsQualitative, setProductBreakdownRatingsQualitative] = useState(productBreakdownRatingsQualitativeObject);
  const [productRecommended, setProductRecommended] = useState(null);
  const [overallProductRecommendation, setOverallProductRecommendation] = useState(null);
  const [productReviewSummary, setProductReviewSummary] = useState(null);
  const [productReviewBody, setProductReviewBody] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [productReviewPhotos, setProductReviewPhotos] = useState(null);


  const postReviewFormat = {
    product_id: product.id,
    rating: overallProductRecommendation,
    summary: productReviewSummary,
    body: productReviewBody,
    recommend: productRecommended ? productRecommended === 'Yes' ? true : false : null,
    name: userName,
    email: userEmail,
    photos: productReviewPhotos,
    characteristics: Object.values(productBreakdownRatingsObject)
  }


  const productBreakdownRatingsChange = (event) => {
    let value = event.target.value;
    let key = event.target.name.slice(7)
    let characteristicId = event.target.attributes.characteristicId

    console.log(characteristicId);

    productBreakdownRatingsObject[key] = {
      id: characteristicId,
      value: value
    }
    
    setProductBreakdownRatings(productBreakdownRatingsObject);

    productBreakdownRatingsQualitativeObject[key] = titleBreakdownForKeys[key][value - 1]
    setProductBreakdownRatingsQualitative(productBreakdownRatingsQualitativeObject);

  } 

  const characteristics = reviewsAggregates ? reviewsAggregates.characteristics : undefined;
  console.log('characteristics', characteristics)

  const productCharacteristicBreakdown = (characteristic) => {
    switch (characteristic) {
      case 'Fit':
        return ['Runs Tight', '', 'Runs Long']
      case 'Size':
        return ['Too Small', '', 'Too Wide']
      case 'Width':
        return ['Too Narrow', '', 'Too Wide']
      case 'Length':
        return ['Short', '', 'Long']
      case 'Comfort':
        return ['Uncomfortable', '', 'Perfect']
      case 'Quality':
        return ['Poor', '', 'Perfect']
    }
  }

  const titleBreakdownForKeys = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty Great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }

  const productRecommendation = (
    <>
      <div className="radio" name="productRecommendation">
        <strong>Do you recommend this product?</strong>
        <label>
          <input type='radio' value="Yes" name="productRecommendation" onChange={(e) => {
              setProductRecommended(e.target.value);}}/>
          Yes
        </label>
        <label>
          <input type='radio' value="No" name="productRecommendation" onChange={(e) => {
              setProductRecommended(e.target.value);}}/>
          No
        </label>
      </div><br/>
    </>
  )

  const overallRecommendation = (
    <>
      <ul className="rate-area">
        <input type="radio" id="5-star" name="overallRating" value="5" onChange={(e) => {
              setOverallProductRecommendation(e.target.value);}}/>
          <label for="5-star" title="Amazing">5 stars</label>
        <input type="radio" id="4-star" name="overallRating" value="4" onChange={(e) => {
              setOverallProductRecommendation(e.target.value);}}/>
          <label for="4-star" title="Good">4 stars</label>
        <input type="radio" id="3-star" name="overallRating" value="3" onChange={(e) => {
              setOverallProductRecommendation(e.target.value);}}/>
          <label for="3-star" title="Average">3 stars</label>
        <input type="radio" id="2-star" name="overallRating" value="2" onChange={(e) => {
              setOverallProductRecommendation(e.target.value);}}/>
          <label for="2-star" title="Not Good">2 stars</label>
        <input type="radio" id="1-star" required="" name="overallRating" value="1" aria-required="true" onChange={(e) => {
              setOverallProductRecommendation(e.target.value);}}/>
          <label for="1-star" title="Bad">1 star</label>
      </ul>
    </>
  )

  const productBreakdownRendering = characteristics ? Object.keys(characteristics).map( key => {
    let characteristicsBreakdown = productCharacteristicBreakdown(key) 
    let characteristicId = characteristics[key]['id']
    return (   
      <div key={characteristics[key]['id']}>
        <div className="form-row-characteristics">
          <div><strong>{key}</strong></div>
        <div>{productBreakdownRatingsQualitative[key] ? productBreakdownRatingsQualitative[key] : null}</div>
        </div>
        <div className="radioCharacteristics">
          <div>
            <input type='radio' id={`${key} 1-value`} name={`rating-${key}`} value="1" characteristicId={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label for={`${key} 1-value`}>1</label>
          </div>
          <div>
            <input type='radio' id={`${key} 2-value`} name={`rating-${key}`} value="2" characteristicId={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label for={`${key} 2-value`}>2</label>
          </div>
          <div>
            <input type='radio' id={`${key} 3-value`} name={`rating-${key}`} value="3" characteristicId={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label for={`${key} 3-value`}>3</label>
          </div>
          <div>
            <input type='radio' id={`${key} 4-value`} name={`rating-${key}`} value="4" characteristicId={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label for={`${key} 4-value`}>4</label>
          </div>
          <div>
            <input type='radio' id={`${key} 5-value`} name={`rating-${key}`} value="5" characteristicId={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label for={`${key} 5-value`}>5</label>
          </div>
        </div>
        <div className="form-row-characteristics">
            <div>{characteristicsBreakdown[0]}</div>
            <div>{characteristicsBreakdown[1]}</div>
            <div>{characteristicsBreakdown[2]}</div>
        </div><br/>
      </div>
    )
  }) : null
  

  const closeModal = (e) => {
    setShowModal(false);
  }

  const submitReview = (e) => {
    console.log('submitReview', e);
  }

  const addReview =
    (
      <>
        <form className="rating-form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <h2>Write Your Review</h2>
            <h4>About the product {product.name}:</h4>
          </div>
          <div><strong>Overall Rating:</strong></div>
          <div>
            {overallRecommendation}
          </div><br/>
          <div>
            {productRecommendation}
          </div>
          <div>
            <div><strong>Product Details:</strong></div>
            <br/>
            {productBreakdownRendering}
          </div><br/>


          <div className='form-row'>
            <Button type="submit" onClick={submitReview}>Submit</Button>
            <Button onClick={closeModal}>Close</Button>
          </div>
        </form>
      </>
    )
  

  return (
    <div> 
      <Button onClick={() => {setShowModal(true)}}>Add Review</Button>
      {showModal && <Modal 
        closeModal={closeModal}
        submitReview={submitReview}
        renderContent={addReview} />}
    </div>
  )
}

export default AddReview;