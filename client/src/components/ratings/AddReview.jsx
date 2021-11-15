import React, { useState } from 'react';
import { selectProduct } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviewsMeta } from '../../store/selectors';
import Modal from '../styles/Modal';
import Button from '../styles/Button.styled.js';
import { Image, Card } from '../styles/Card';
import { ReviewPicture } from './styles/Item.style';
import axios from 'axios';



const AddReview = () => {
  

  const product = useSelector(selectProduct);
  const reviewsAggregates = useSelector(selectReviewsMeta);

  const [showModal, setShowModal] = useState(false);

  const productBreakdownRatingsObject = {};


  const productBreakdownRatingsQualitativeObject = {};

  // component states
  const [productBreakdownRatings, setProductBreakdownRatings] = useState(productBreakdownRatingsObject);
  const [productBreakdownRatingsQualitative, setProductBreakdownRatingsQualitative] = useState(productBreakdownRatingsQualitativeObject);
  const [productRecommended, setProductRecommended] = useState(null);
  const [overallProductRecommendation, setOverallProductRecommendation] = useState(null);
  const [productReviewSummary, setProductReviewSummary] = useState('Example: Best purchase ever!');
  const [productReviewBody, setProductReviewBody] = useState('Why did you like the product or not?');
  const [productReviewBodyCharCount, setProductReviewBodyCharCount] = useState(productReviewBody.length);
  const [userName, setUserName] = useState('Example: jackson11!');
  const [userEmail, setUserEmail] = useState('Example: jackson11@email.com');
  const [productReviewPhotos, setProductReviewPhotos] = useState([]);
  const [emailValid, setEmailValid] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoCount, setPhotoCount] = useState(0);

  //structure for API
  const postReviewFormat = {
    product_id: product.id,
    rating: overallProductRecommendation,
    summary: productReviewSummary,
    body: productReviewBody,
    recommend: productRecommended ? productRecommended === 'Yes' ? true : false : null,
    name: userName,
    email: userEmail,
    photos: productReviewPhotos,
    characteristics: Object.values(productBreakdownRatings)
  }


  // "photos": [{
  //   "id": 1,
  //   "url": "urlplaceholder/review_5_photo_number_1.jpg"
  // },
  // {
  //   "id": 2,
  //   "url": "urlplaceholder/review_5_photo_number_2.jpg"
  // }




  //product ratings change to correct format
  const productBreakdownRatingsChange = (event) => {
    let value = event.target.value;
    let key = event.target.name.slice(7)
    let characteristicId = event.target.attributes.characteristicid.value

    productBreakdownRatingsObject[key] = {
      id: characteristicId,
      value: value
    }
    
    setProductBreakdownRatings(productBreakdownRatingsObject);

    productBreakdownRatingsQualitativeObject[key] = titleBreakdownForKeys[key][value - 1]
    setProductBreakdownRatingsQualitative(productBreakdownRatingsQualitativeObject);

  } 

  


  //characteristics control for selection and formatting
  const characteristics = reviewsAggregates ? reviewsAggregates.characteristics : undefined;

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
      </div>
    </>
  )

  const overallRecommendation = (
    <>
      <div><strong>Overall Rating:</strong></div>
      <div>
        <ul className="rate-area">
          <input type="radio" id="5-star" name="overallRating" value="5" onChange={(e) => {
                setOverallProductRecommendation(e.target.value);}}/>
            <label htmlFor="5-star" title="Amazing">5 stars</label>
          <input type="radio" id="4-star" name="overallRating" value="4" onChange={(e) => {
                setOverallProductRecommendation(e.target.value);}}/>
            <label htmlFor="4-star" title="Good">4 stars</label>
          <input type="radio" id="3-star" name="overallRating" value="3" onChange={(e) => {
                setOverallProductRecommendation(e.target.value);}}/>
            <label htmlFor="3-star" title="Average">3 stars</label>
          <input type="radio" id="2-star" name="overallRating" value="2" onChange={(e) => {
                setOverallProductRecommendation(e.target.value);}}/>
            <label htmlFor="2-star" title="Not Good">2 stars</label>
          <input type="radio" id="1-star" required="" name="overallRating" value="1" aria-required="true" onChange={(e) => {
                setOverallProductRecommendation(e.target.value);}}/>
            <label htmlFor="1-star" title="Bad">1 star</label>
        </ul>
      </div>
    </>
  )

  const overallRecommendationError = (
    <div>
      {overallProductRecommendation === null && submitAttempted === true ? <div className='error'>Overall rating required.</div> : null}
    </div>
  )

  const reviewSummary = (
    <>
      <label htmlFor="review summary"><strong>Review Summary: </strong></label>
      <div>
        <input 
          className="reviewSummary"
          id="reviewSummary" 
          type="text"
          maxLength={60} 
          name="reviewSummary" 
          value={productReviewSummary}
          onChange={ (e) => { 
            setProductReviewSummary(e.target.value);  
            }}
        ></input>
      </div>
    </>
  )

  const reviewBody = (
    <>
      <label htmlFor="review body"><strong>Review Body: </strong></label>
      <div>
        <textarea
          className="reviewBody"
          id="reviewBody" 
          maxLength={1000} 
          name="reviewBody" 
          value={productReviewBody}
          onChange={ (e) => { 
            setProductReviewBody(e.target.value) 
            setProductReviewBodyCharCount(e.target.value.length);
          }}
          ></textarea> 
      </div>
      <div>
        {productReviewBodyCharCount < 50 ? `Minimum required characters left: ${50-productReviewBodyCharCount}` : 'Minimum reached'}
      </div>  
      {productReviewBodyCharCount < 50 && submitAttempted === true ? <div className='error'>Review must be 50 or more characters.</div> : null}      
    </>
  )

  const reviewUserName = (
    <>
      <label htmlFor="review userName"><strong>Username: </strong></label>
      <div>
        <input
          className="reviewUserName"
          type="text"
          id="reviewUserName" 
          maxLength={60} 
          name="reviewUserName" 
          value={userName}
          onChange={ (e) => { setUserName(e.target.value) }}
          ></input> 
      </div>
      <div className="reviewWarningMessages">For privacy reasons, do not use your full name or email address.</div>
      {
        (userName === null ||  
        userName === 'Example: jackson11!') && 
        submitAttempted === true ? <div className='error'>Username required.</div> : null
      }  
    </>
  )

  const reviewUserEmail = (
    <>
      <label htmlFor="review user email"><strong>Email: </strong></label>
      <div>
        <input
          className="reviewUserName"
          type="text"
          id="reviewUserEmail" 
          maxLength={60} 
          name="reviewUserEmail" 
          value={userEmail}
          onChange={ (e) => { 
            setUserEmail(e.target.value)
            setEmailValid(emailValidation(e.target.value)) 
          }}
          ></input> 
      </div>
      <div className="reviewWarningMessages">For authentication reasons, you will not be emailed” will appear.</div>
      {
        (userEmail === null ||  
        userEmail === 'Example: jackson11@email.com') && 
        submitAttempted === true ? <div className='error'>Email required. {emailValid ? null : 'Email Invalid'}</div> : null
      }   
    </>
  )

  const emailValidation = (email) => {
    let emailValidation = false;
    let last4Email = email.slice(email.length-4)
    let atSymbolIncluded = false;
    let noSpaces = true;

    for (let i = 0; i < email.length; i++) {
      if (email[i] === '@') {
        atSymbolIncluded = true;
      }

      if (email[i] === ' ') {
        noSpaces = false;
      }
    }
    
    if (last4Email = '.com' && atSymbolIncluded && noSpaces) {
      emailValidation = true;
    }
    
    
    return emailValidation;
  }

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
            <input type='radio' id={`${key} 1-value`} name={`rating-${key}`} value="1" characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label htmlFor={`${key} 1-value`}>1</label>
          </div>
          <div>
            <input type='radio' id={`${key} 2-value`} name={`rating-${key}`} value="2" characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label htmlFor={`${key} 2-value`}>2</label>
          </div>
          <div>
            <input type='radio' id={`${key} 3-value`} name={`rating-${key}`} value="3" characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label htmlFor={`${key} 3-value`}>3</label>
          </div>
          <div>
            <input type='radio' id={`${key} 4-value`} name={`rating-${key}`} value="4" characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label htmlFor={`${key} 4-value`}>4</label>
          </div>
          <div>
            <input type='radio' id={`${key} 5-value`} name={`rating-${key}`} value="5" characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}/>
            <label htmlFor={`${key} 5-value`}>5</label>
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

  const photoButtons = (
    <>
      <div className="review-form-row">
        <input className='modal-btns' type="file" onChange={ (e) => { handleFileSelect(e) }} />
        <button className='modal-btns' onClick={ (e) => {handleFileSubmit(e) }}>Submit Photo</button>
      </div><br/>
    </>
  )

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);
  }

  const handleFileSubmit = () => {
    const reader = new FileReader();
    const file = selectedPhoto;

    reader.onloadend = () => {
      setProductReviewPhotos(productReviewPhotos.concat(reader.result));
      console.log('productReviewPhotos', productReviewPhotos)
    };

    reader.readAsDataURL(file);

    setPhotoCount(photoCount + 1);

    
  }

  const submitReview = (e) => {
    setSubmitAttempted(true);
    console.log('submitReview', e);
    console.log('postReviewFormat', postReviewFormat);
  }

  const photoGallery = productReviewPhotos.map( (photo, index) => {
    return <Card key={index} style={{ border: 'none'}}>
        <ReviewPicture 
          src={photo ? photo : noPreview}
          alt="review photo"
          onError={ (e) => { addDefaultSrc(e) }}
        ></ReviewPicture>
      </Card>
  })

  const addReview =
    (
      <>
        <form className="rating-form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <h3>Write Your Review</h3>
            <h4>About the product {product.name}:</h4>
          </div>
          <div>
            {overallRecommendation}
          </div>
          <div>
            {overallRecommendationError}
          </div><br/>
          <div className="review-form-row">
            <div>{reviewSummary}</div>
            <div>{reviewBody}</div>
          </div><br/>
          <div className="review-form-row">
            <div>{reviewUserName}</div>
            <div>{reviewUserEmail}</div>
          </div><br/>
          <div>
            {productRecommendation}
          </div><br/>
          <div>
            <div><strong>Product Details:</strong></div><br/>
            {productBreakdownRendering}
          </div><br/>
          {photoCount < 5 ? photoButtons : null }
          <div className="review-form-row">
            {productReviewPhotos ? photoGallery : null}
          </div><br />
          <div className='modal-btns'>
            <Button className='modal-btns' type="submit" onClick={ (e) => { submitReview(e) }}>Submit</Button>
            <Button className='modal-btns' onClick={closeModal}>Close</Button>
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