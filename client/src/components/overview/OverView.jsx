import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct, loadStyles } from '../../store/apiActions.js';
import { selectProduct, selectStyles, selectCurrentStyle } from '../../store/selectors';
import HeaderPanel from './HeaderPanel.jsx';
import StylePanel from './StylePanel.jsx';
import ButtonPanel from './ButtonPanel.jsx';
import Gallery from './Gallery.jsx';

const OverView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProduct());
    dispatch(loadStyles());
  }, []);

  const product = useSelector(selectProduct);
  const styles = useSelector(selectStyles);
  const [selectedStyle, setSelectedStyle] = useState(undefined);
  const currentStyle = useSelector(selectCurrentStyle(selectedStyle));

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '70%' }}>
          <Gallery currentStyle={currentStyle} />
        </div>
        <div
          style={{
            width: '30%',
            marginLeft: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <HeaderPanel product={product} styles={styles} currentStyle={currentStyle} />
          <StylePanel styles={styles} currentStyle={currentStyle} setSelectedStyle={setSelectedStyle} />
          <ButtonPanel styles={styles} currentStyle={currentStyle} />
        </div>
      </div>
      <h3>{product.slogan}</h3>
      <h3>{product.description}</h3>
    </div>
  );
};

export default OverView;