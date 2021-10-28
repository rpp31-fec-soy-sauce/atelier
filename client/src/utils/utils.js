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