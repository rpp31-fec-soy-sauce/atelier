import { createAction } from '@reduxjs/toolkit';
import makeApiCall from './api';
import { actions } from './reducer';
import store from './store';

export const apiCallBegan = createAction('api/callBegan');

export const loadProduct = () =>
  apiCallBegan({
    url: `products/${getProductId()}`,
    method: 'GET',
    onSuccess: actions.productLoaded.type,
  });

export const loadStyles = () =>
  apiCallBegan({
    url: `products/${getProductId()}/styles`,
    method: 'GET',
    onSuccess: actions.stylesLoaded.type,
  });

export const loadQuestions = (page = 1, count = 2) =>
  apiCallBegan({
    url: `/qa/questions?product_id=${getProductId()}&page=${page}&count=${count}`,
    method: 'GET',
    onSuccess: actions.questionsLoaded.type,
  });

export const loadReviews = (page = 1, count = 2, sort = 'helpful') =>
  apiCallBegan({
    url: `reviews/?product_id=${getProductId()}&page=${page}&count=${count}&sort=${sort}`,
    method: 'GET',
    onSuccess: actions.reviewsLoaded.type,
  });

export const loadReviewsMeta = () =>
  apiCallBegan({
    url: `reviews/meta/?product_id=${getProductId()}`,
    method: 'GET',
    onSuccess: actions.reviewsMetaLoaded.type,
  });

export const loadRelatedProducts = () => {
  makeApiCall('GET', `products/${getProductId()}/related`)
    .then(response => {

      /* Get product info on each related product */
      const productPromises = response.data.map(id =>
        makeApiCall('GET', `products/${id}`)
      );

      /* Get review meta data on each related product */
      const reviewPromises = response.data.map(id =>
        makeApiCall('GET', `reviews/meta?product_id=${id}`)
      );

      /* Get style info on each related product */
      const stylePromises = response.data.map(id =>
        makeApiCall('GET', `products/${id}/styles`)
      );

      /* Convert all promises to a single promise that will resolve to
       * an array of products, reviews, and styles. */
      return Promise.all([
        Promise.all(productPromises),
        Promise.all(reviewPromises),
        Promise.all(stylePromises),
      ]);
    })
    .then(responses => {

      const [products, reviews, styles] = responses;

      /* Declare an empty array that hold the array of modified product objects */
      const result = [];

      /* For each related product, combine product, review and style information into
       * a single object */
      for (let i = 0; i < products.length; i += 1) {
        result.push({
          ...products[i].data,
          rating: aggregateRatings(reviews[i].data.ratings),
          url: getDefaultStyle(styles[i].data.results).photos[0].url
        });
      }

      /* Dispatch an action to save the resulting array of modified product objects in the store */
      store.dispatch(actions.relatedProductsLoaded(result));
    })
    .catch(err => console.log(err));
};

export const markQuestionHelpful = id => {
  store.dispatch(
    apiCallBegan({
      url: `qa/questions/${id}/helpful`,
      method: 'PUT',
    })
  );
};

export const reportQuestion = id => {
  store.dispatch(
    apiCallBegan({
      url: `qa/questions/${id}/report`,
      method: 'PUT',
    })
  );
};

export const markAnswerHelpful = id => {
  store.dispatch(
    apiCallBegan({
      url: `qa/answers/${id}/helpful`,
      method: 'PUT',
    })
  );
};

export const reportAnswer = id => {
  store.dispatch(apiCallBegan)({
    url: `qa/answers/${id}/report`,
    method: 'PUT',
  });
};

/* A helper function to get the product id from the current url */
const getProductId = () => {
  console.log('product id:', window.location.hash.split('#').join(''));
  return window.location.hash.split('#').join('');
};

/* A helper function that takes a rating object and returns the average rating as a float */
const aggregateRatings = ratings => {
  let sum = 0;
  let count = 0;
  for (const rating in ratings) {
    sum += rating * parseInt(ratings[rating]);
    count += parseInt(ratings[rating]);
  }
  return count === 0 ? 0 : sum / count;
};

/* A helper function that takes an array of styles and return the default style object */
const getDefaultStyle = styles => {
  const defaultStyle = styles.find(style => style['default?']);
  
  /* If there is no default style, return the first style */
  if (!defaultStyle) return styles[0];
  return defaultStyle;
};
