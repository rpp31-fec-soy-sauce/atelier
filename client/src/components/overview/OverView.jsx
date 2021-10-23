import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct, loadStyles } from '../../store/apiActions.js';
import { selectProduct, selectStyles } from '../../store/selectors';

const OverView = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProduct());
    dispatch(loadStyles());
  }, []);

  const product = useSelector(selectProduct);
  const styles = useSelector(selectStyles);

  return (
    <div>
      <h1>Over View</h1>
      <h3>Product</h3>
      <p>{JSON.stringify(product)}</p>
      <h3>Style</h3>
      <p>{JSON.stringify(styles)}</p>
    </div>
  );
};

export default OverView;