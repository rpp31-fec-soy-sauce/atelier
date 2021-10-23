import { createAction } from "@reduxjs/toolkit";
import { actions } from "./reducer";

export const apiCallBegan = createAction('api/callBegan');

export const loadProduct = () => apiCallBegan({
  url: `products/${getProductId()}`,
  method: 'GET',
  onSuccess: actions.productLoaded.type
});

export const loadStyles = () => apiCallBegan({
  url: `products/${getProductId()}/styles`,
  method: 'GET',
  onSuccess: actions.stylesLoaded.type
});

export const loadQuestions = () => apiCallBegan({
  url: `/qa/questions?product_id=${getProductId()}`,
  method: 'GET',
  onSuccess: actions.questionsLoaded.type
});

export const loadReviews = () => apiCallBegan({
  url: `reviews/?product_id=${getProductId()}`,
  method: 'GET',
  onSuccess: actions.reviewsLoaded.type
});

export const loadReviewsMeta = () => apiCallBegan({
  url: `reviews/meta/?product_id=${getProductId()}`,
  method: 'GET',
  onSuccess: actions.reviewsMetaLoaded.type
});

const getProductId = () => {
  console.log('product id:', window.location.hash.split('#').join(''));
  return window.location.hash.split('#').join('');
};