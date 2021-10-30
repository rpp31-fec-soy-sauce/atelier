/* A helper function that takes a rating object and returns the average rating as a float */
export const aggregateRatings = ratings => {
  let sum = 0;
  let count = 0;
  for (const rating in ratings) {
    sum += rating * parseInt(ratings[rating]);
    count += parseInt(ratings[rating]);
  }
  return count === 0 ? 0 : sum / count;
};

/* A helper function that takes an array of styles and return the default style object */
export const getDefaultStyle = styles => {
  const defaultStyle = styles.find(style => style['default?']);
  
  /* If there is no default style, return the first style */
  if (!defaultStyle) return styles[0];
  return defaultStyle;
};

/* A helper function to get the product id from the current url */
export const getProductId = () => window.location.hash.split('#').join('');


/* A helper function to get the total number of reviews for a given product */
export const totalReviewCount = (reviewRatingsObject = 0) => { 
  let totalReviewCount = 0;
  if (reviewRatingsObject !== 0) {
    Object.values(reviewRatingsObject).forEach((value) => {
      totalReviewCount += parseInt(value);
    });
  }

  return totalReviewCount;
};

/* A helper function to calculate how many recommended out of total reviews */
export const calculatePercentRecommended = (recommendedObject) => {
  let total = 0;
  let recommendedSum = Object.keys(recommendedObject).length !== 0 ? parseInt(recommendedObject.recommended.true) : 0;

  if (Object.keys(recommendedObject).indexOf('recommended') !== -1) {
    Object.values(recommendedObject.recommended).forEach((value) => {
      total += parseInt(value);
    })
  }

  return total > 0 ? (recommendedSum/total)*100 : 0;    
}