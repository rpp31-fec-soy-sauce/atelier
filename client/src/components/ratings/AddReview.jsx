import React, { useState } from 'react';
import { selectProduct } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectReviewsMeta } from '../../store/selectors';
import Modal from '../styles/Modal';
import Button from '../styles/Button.styled.js';
import { Image, Card } from '../styles/Card';
import { ReviewPicture } from './styles/Item.style';
import axios from 'axios';
import noPreview from '../../../assets/no-preview.jpg';
import makeApiCall from '../../store/api';
import * as apiActions from '../../store/apiActions';



const AddReview = () => {

  const dispatch = useDispatch();

  const product = useSelector(selectProduct);
  const reviewsAggregates = useSelector(selectReviewsMeta);
  const { loadReviews, loadReviewsMeta } = bindActionCreators(apiActions, dispatch);

  const [showModal, setShowModal] = useState(false);

  // component states
  const [productBreakdownRatings, setProductBreakdownRatings] = useState({});
  const [productBreakdownRatingsQualitative, setProductBreakdownRatingsQualitative] = useState({});
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
  const [reviewValid, setReviewValid] = useState(false);

  //structure for API
  const postReviewFormat = {
    product_id: product ? product.id : null,
    rating: Number.parseInt(overallProductRecommendation),
    summary: productReviewSummary,
    body: productReviewBody,
    recommend: productRecommended ? productRecommended === 'Yes' ? true : false : null,
    name: userName,
    email: userEmail,
    photos: productReviewPhotos,
    characteristics: productBreakdownRatings
  }


  //product ratings change to correct format
  const productBreakdownRatingsChange = (e) => {
    let value = Number.parseInt(e.target.value);
    let key = e.target.name.slice(7)
    let characteristicId = e.target.attributes.characteristicid.value

    setProductBreakdownRatings(productBreakdownRatings => ({
      ...productBreakdownRatings,
      [characteristicId]: value
    }));

    setProductBreakdownRatingsQualitative(productBreakdownRatingsQualitative => ({
      ...productBreakdownRatingsQualitative,
      [key]: titleBreakdownForKeys[key][value - 1]
    }));

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
          <input 
            type='radio' 
            value="Yes" 
            name="productRecommendation"
            data-element={'productRecommendation-yes'}
            data-module={'review'} 
            onChange={(e) => {
              setProductRecommended(e.target.value);
            }}/>
          Yes
        </label>
        <label>
          <input 
            type='radio' 
            value="No" 
            role="productRecommendation"
            data-element={'productRecommendation-no'}
            data-module={'review'}
            onChange={(e) => {
              setProductRecommended(e.target.value);
            }}/>
          No
        </label>
      </div>
      {productRecommended === null && submitAttempted === true ? <div className='formError'>Recommendation Required</div> : null}      
    </>
  )

  const overallRecommendation = (
    <>
      <div><strong>Overall Rating:</strong></div>
        <ul className="rate-area">
          <input 
            type="radio" 
            id="5-star" 
            name="overallRating" 
            value={5} 
            data-element={'overallRating-5'}
            data-module={'review'}
            onChange={(e) => {
                setOverallProductRecommendation(e.target.value);
            }}/>
            <label htmlFor="5-star" title="Amazing">5 stars</label>
          <input 
            type="radio" 
            id="4-star" 
            name="overallRating" 
            value={4} 
            data-element={'overallRating-4'}
            data-module={'review'}
            onChange={(e) => {
                setOverallProductRecommendation(e.target.value);
            }}/>
            <label htmlFor="4-star" title="Good">4 stars</label>
          <input 
            type="radio" 
            id="3-star" 
            name="overallRating" 
            value={3} 
            data-element={'overallRating-3'}
            data-module={'review'}
            onChange={(e) => {
                setOverallProductRecommendation(e.target.value);
            }}/>
            <label htmlFor="3-star" title="Average">3 stars</label>
          <input 
            type="radio" 
            id="2-star" 
            name="overallRating" 
            value={2} 
            data-element={'overallRating-2'}
            data-module={'review'}
            onChange={(e) => {
                setOverallProductRecommendation(e.target.value);
            }}/>
            <label htmlFor="2-star" title="Not Good">2 stars</label>
          <input 
            type="radio" 
            id="1-star" 
            required="" 
            name="overallRating" 
            value={1} 
            data-element={'overallRating-1'}
            data-module={'review'}
            aria-required="true" 
            onChange={(e) => {
                setOverallProductRecommendation(e.target.value);
            }}/>
            <label htmlFor="1-star" title="Bad">1 star</label>
        </ul>
    </>
  )

  const overallRecommendationValidation = (
      <div>
        {overallProductRecommendation === null && submitAttempted === true ? 
          <div className='formError'>Overall rating required.</div> : null}
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
          data-element={'reviewSummary'}
          data-module={'review'} 
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
          data-element={'reviewBody'}
          data-module={'review'} 
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
      {productReviewBodyCharCount < 50 && submitAttempted === true ? 
        <div className='formError'>Review must be 50 or more characters.</div>
        : null}      
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
          data-element={'reviewUserName'}
          data-module={'review'} 
          value={userName}
          onChange={ (e) => { setUserName(e.target.value) }}
          ></input> 
      </div>
      <div className="reviewWarningMessages">For privacy reasons, do not use your full name or email address.</div>
      {
        (userName === null ||  
        userName === 'Example: jackson11!') && 
        submitAttempted === true ? <div className='formError'>Username required.</div> : null}  
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
          data-element={'reviewUserEmail'}
          data-module={'review'}
          value={userEmail}
          onChange={ (e) => { 
            setUserEmail(e.target.value)
            setEmailValid(emailValidation(e.target.value)) 
          }}
          ></input> 
      </div>
      <div className="reviewWarningMessages">For authentication reasons, you will not be emailed” will appear.</div>
      {
        (userEmail === '' ||  
        userEmail === 'Example: jackson11@email.com') && 
        submitAttempted === true ? <div className='formError'>Email required. {emailValid ? null : 'Email Invalid'}</div> : null
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
    let characteristicsBreakdown = productCharacteristicBreakdown(key); 
    let characteristicId = characteristics[key]['id'];
    return (   
      <div key={characteristics[key]['id']}>
        <div className={"form-row-characteristics"} >
          <div><strong>{key}</strong></div>
        <div name="product qual">{productBreakdownRatingsQualitative[`${key}`] ? productBreakdownRatingsQualitative[`${key}`] : 'None Selected'}
        </div>
        </div>
        <div className="radioCharacteristics">
          <div>
            <input 
              type='radio' 
              id={`${key} 1-value`} 
              name={`rating-${key}`} 
              value="1"
              data-element={`rating-${key}-1`}
              data-module={'review'} 
              characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}
            />
            <label htmlFor={`${key} 1-value`}>1</label>
          </div>
          <div>
            <input 
              type='radio' 
              id={`${key} 2-value`} 
              name={`rating-${key}`} 
              value="2" 
              data-element={`rating-${key}-2`}
              data-module={'review'} 
              characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}
            />
            <label htmlFor={`${key} 2-value`}>2</label>
          </div>
          <div>
            <input 
              type='radio' 
              id={`${key} 3-value`} 
              name={`rating-${key}`} 
              value="3" 
              data-element={`rating-${key}-3`}
              data-module={'review'} 
              characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}
            />
            <label htmlFor={`${key} 3-value`}>3</label>
          </div>
          <div>
            <input 
              type='radio' 
              id={`${key} 4-value`} 
              name={`rating-${key}`} 
              value="4" 
              data-element={`rating-${key}-4`}
              data-module={'review'} 
              characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}
            />
            <label htmlFor={`${key} 4-value`}>4</label>
          </div>
          <div>
            <input 
              type='radio' 
              id={`${key} 5-value`} 
              name={`rating-${key}`} 
              value="5" 
              data-element={`rating-${key}-5`}
              data-module={'review'} 
              characteristicid={characteristicId}
              onChange={(e) => {productBreakdownRatingsChange(e);}}
            />
            <label htmlFor={`${key} 5-value`}>5</label>
          </div>
        </div>
        <div className="form-row-characteristics">
            <div>{characteristicsBreakdown[0]}</div>
            <div>{characteristicsBreakdown[1]}</div>
            <div>{characteristicsBreakdown[2]}</div>
        </div>
      </div>
    )
  }) : null
  

  const closeModal = (e) => {
    setShowModal(false);
  }

  const photoButtons = (
    <>
      <div className="review-form-row">
        <input 
          className='modal-btns' 
          type="file" 
          data-element={'chooseFileButton'}
          data-module={'review'} 
          onChange={ (e) => { handleFileSelect(e) }} 
        />
        <button 
          className='modal-btns' 
          name={'submittingPhotoButton'}
          data-element={'submittingPhotoButton'}
          data-module={'review'}
          onClick={ (e) => {handleFileSubmit(e) }}>Submit Photo
        </button>
      </div><br/>
    </>
  )

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);
  }

  const handleFileSubmit = () => {
    
    const fd = new FormData();
    fd.append('file', selectedPhoto)
    fd.append('upload_preset', 'cloudinaryUpload')

    axios.post('https://api.cloudinary.com/v1_1/dcuxezkzp/image/upload/', fd, { headers: { "X-Requested-With": "XMLHttpRequest" } })
      .then(res => {
        
        setProductReviewPhotos([...productReviewPhotos, res.data.secure_url])
        setPhotoCount(photoCount + 1);
      })
      .catch(err => {
       console.log('error', err); 
    })
 
  }

  const submitReview = (e) => {
    let submit = async () => await setSubmitAttempted(true);
    let formError = async () => await document.getElementsByClassName('formError').length;

    submit()
    .then( (value) => {
      formError()
      .then( (value) => {
        if (value === 0)  {
          setReviewValid(true);
        
          postReview(postReviewFormat);
          closeModal(e);
        } else {
          setReviewValid (false);
         
        }
      })
    })
  }

  const postReview = (postReviewFormat) => {
    makeApiCall('POST', '/reviews', postReviewFormat)
    .then( (res) => {
      return res;
    })
    .then ( (resDone) => {
      loadReviewsMeta();
      loadReviews(1, 100);
    })
    .catch( (err) => {
      console.log('error', err);
    })
  } 

  const photoGallery = productReviewPhotos.map( (photo, index) => {
    return (
      <Card 
        key={index} 
        style={{ border: 'none'}}
      >
        <ReviewPicture 
          src={photo ? photo : noPreview}
          alt="review photo"
          data-element={'addReviewPhotoCard'}
          data-module={'review'}
          onError={ (e) => { addDefaultSrc(e) }}
        ></ReviewPicture>
      </Card>
    )
  })

  const addReview =
    (
      <>
        <form role="rating-form" className="rating-form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <h3>Write your Review for {product ? product.name : null}:</h3>
          </div>
          <div>
            {overallRecommendation}
          </div>
          <div>
            {overallRecommendationValidation}
          </div><br/>
          <div className="review-form-row">
            <div>{reviewSummary}</div>
            <div>{reviewBody}</div>
          </div><br/>
          <div className="review-form-row">
            <div>{reviewUserName}</div>
            <div>{reviewUserEmail}</div>
          </div>
          <div>
            {productRecommendation}
          </div><br/>
          <div>
            <div><strong>Product Details:</strong></div>
            {productBreakdownRendering}
          </div><br/>
          {photoCount < 5 ? photoButtons : null }
          <div className="review-form-row">
            {productReviewPhotos ? photoGallery : null}
          </div>
          <div className='modal-btns'>
            <Button 
              className='modal-btns' 
              type="submit" 
              name={'submitReviewButton'}
              data-element={'submitReviewButton'}
              data-module={'review'}
              onClick={ (e) => { submitReview(e) }}>Submit
            </Button>
            <Button 
              className='modal-btns'
              name={'closeAddReviewButton'}
              data-element={'closeAddReviewButton'}
              data-module={'review'} 
              onClick={closeModal}>Close
            </Button>
          </div>
        </form>
      </>
    )
  

  return (
    <div> 
      <Button 
        role="add-review-button" 
        name={'addReviewButton'}
        data-element={'addReviewButton'}
        data-module={'review'}  
        onClick={() => {setShowModal(true)}}>Add Review
      </Button>
      {showModal && <Modal 
        closeModal={closeModal}
        submitReview={submitReview}
        renderContent={addReview} />}
    </div>
  )
}

export default AddReview;