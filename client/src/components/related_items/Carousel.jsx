import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noImage from '../../../assets/no-preview.jpg';
import { Container0, CarouselBox, Anchor, Card, Image, Category, Price, RightArrow, LeftArrow, ModalStar, Parent, Compare, Products, Row } from '../styles/Card.js';
import Stars from '../universal_components/StarRatingStaticSmall.jsx';
import Modal from '../styles/Modal.js';
import { loadRelatedProducts, loadReviewsMeta, loadReviews, loadQuestions, loadStyles, loadProduct } from '../../store/apiActions';
import { selectProduct, selectCurrentStyle, selectedStyle, selectAverageRating, selectRelatedProducts } from '../../store/selectors';
import { getOutfits } from '../../store/funcActions.js';
import { XButton } from '../styles/Card.js';
import CompareRating from './CompareRating.jsx';
import ComparePrice from './ComparePrice.jsx';
import PictureGallery from './PictureGallery.jsx';

const Carousel = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);
  useEffect(() => dispatch(getOutfits), []);

  const currentProduct = useSelector(selectProduct);
  const currentStyle = useSelector(selectCurrentStyle(undefined));
  const averageRating = useSelector(selectAverageRating);

  const relatedProducts = useSelector(selectRelatedProducts);

  // console.log('related products: ', relatedProducts)
  // console.log('current product: ', currentProduct)
  // console.log('current style: ', currentStyle)
  // console.log('rating: ', averageRating)


  const [current, setCurrent] = useState(0);
  const relatedLength = relatedProducts.length;

  const moveLeft = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const moveRight = () => {
    if (current < relatedLength) {
      setCurrent(current + 1);
    }
  }

  let start = current;
  let end = start + 4;


  const handleProductChange = (id) => {
    history.pushState(null, null, id);
    dispatch(loadProduct());
    dispatch(loadStyles());
    dispatch(loadQuestions());
    dispatch(loadReviews());
    dispatch(loadReviewsMeta());
    dispatch(loadRelatedProducts);


    setTimeout( () => {
      window.scroll(0, 0);
      setCurrent(0);
    }, 400)
  };


  // Modal Code
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (rating, price, name, imageUrl) => {
    setShowModal(prev => !prev);
    setModalData({
      currentProduct: {
        name: currentProduct.name,
        rating: averageRating,
        price: currentProduct.default_price,
        gallery: currentStyle.photos[0].url
      },
      clickedProduct: {
        name: name,
        rating: rating,
        price: price,
        gallery: imageUrl
      }
    });
  };

  const closeModal = () => {
    setShowModal(false);
  }

  const renderContent = (
      <div style={{width: '450px'}}>
        <XButton onClick={closeModal}>X</XButton>
        <Compare>Comparing</Compare>
        {!modalData ? <div>Data Loading</div> : (
          <>
          <Products>
            <div>{modalData.currentProduct.name}</div>
            <div>{modalData.clickedProduct.name}</div>
          </Products>
          <div>
            <CompareRating currentRating={modalData.currentProduct.rating } clickedRating={modalData.clickedProduct.rating}></CompareRating>
            <ComparePrice currentPrice={modalData.currentProduct.price } clickedPrice={modalData.clickedProduct.price}></ComparePrice>
            <PictureGallery currentGallery={modalData.currentProduct.gallery} clickedGallery={modalData.clickedProduct.gallery}></PictureGallery>
          </div>
          </>
        )}
      </div>);

  if (relatedLength === 0) {
    return <div><b>NONE</b></div>
  } else {
    return (
      <Container0>
        {current > 0 ? <LeftArrow role='left-arrow' onClick={() => moveLeft()}/> : null}
        <CarouselBox>
          {relatedProducts.slice(start, end).map(product => {
            return <Anchor key={product.id} >
                    <Card role='card'>
                      {!product.url ? <Parent><Image onClick={() => handleProductChange(product.id)} role='images' src={noImage} style={{height: '170px'}}></Image><ModalStar onClick={() => openModal(product.rating, product.default_price, product.name, product.url)}></ModalStar></Parent> :
                      <Parent><Image onClick={() => handleProductChange(product.id)} role='images' style={{height: '170px'}} src={product.url}></Image><ModalStar onClick={() => openModal(product.rating, product.default_price, product.name, product.url)}></ModalStar></Parent>}
                      <div>
                        <Category>{product.category}</Category>
                        <h5><b>{product.name}</b></h5>
                        <Price>${product.default_price}</Price>
                        <Stars averageRating={product.rating}/>
                      </div>
                    </Card>
                  </Anchor>
          })}
        </CarouselBox>
        {current === relatedLength - 4 ? null : <RightArrow role='right-arrow' onClick={() => moveRight()}/>}
        <>
          {showModal && <Modal closeModal={closeModal} renderContent={renderContent} />}
        </>
      </Container0>

    );
  }
};

export default Carousel;