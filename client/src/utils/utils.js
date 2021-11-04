/* A helper function that takes a rating object and returns the average rating as a float */
export const aggregateRatings = ratings => {
  let sum = 0;
  let count = 0;
  for (const rating in ratings) {
    sum += rating * parseInt(ratings[rating]);
    count += parseInt(ratings[rating]);
  }
  return count === 0 ? 0 : Math.round((sum / count) * 100) / 100;
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
export const calculatePercentRecommended = (reviewsAggregate) => {
  let total = 0;
  let recommendedSum = Object.keys(reviewsAggregate).length !== 0 ? parseInt(reviewsAggregate.recommended.true) : 0;

  if (Object.keys(reviewsAggregate).indexOf('recommended') !== -1) {
    Object.values(reviewsAggregate.recommended).forEach((value) => {
      total += parseInt(value);
    })
  }

  return total > 0 ? Math.round((recommendedSum/total)*100) : 0;
}

/* A helper function to calculate the star rating percentage out of all ratings */
export const calculatePercentByRating = (reviewsAggregate) => {
  let total = 0;

  if (Object.keys(reviewsAggregate).indexOf('ratings') !== -1) {
    Object.values(reviewsAggregate.ratings).forEach((value) => {
      total += parseInt(value);
    })

    let ratingsPercent = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };

    Object.keys(reviewsAggregate.ratings).forEach( key => {
      ratingsPercent[key] = (reviewsAggregate.ratings[key]/total)*100;
    })


    return ratingsPercent;
  }
}

