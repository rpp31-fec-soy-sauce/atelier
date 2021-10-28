import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRelatedProducts } from '../../store/apiActions';
import { selectRelatedProducts } from '../../store/selectors';

const RelatedItems = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);

  const relatedProducts = useSelector(selectRelatedProducts);

  return (
    <div>
      <h1>Related Items</h1>
      {/* <p>{JSON.stringify(relatedProducts)}</p> */}
    </div>
  );
};

export default RelatedItems;