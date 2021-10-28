import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct, loadStyles } from '../../store/apiActions.js';
import { selectProduct, selectStyles } from '../../store/selectors';
import Button from '../styles/Button.styled.js';
import Avatar from './styles/Avatar.styled';
import Gallery from './styles/Gallery.styled.js';

const OverView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProduct());
    dispatch(loadStyles());
  }, []);

  const product = useSelector(selectProduct);
  const styles = useSelector(selectStyles);
  const [selectedStyle, setSelectedStyle] = useState(undefined);

  const getStyle = () => {
    if (!selectedStyle) return undefined;
    return styles.find(style => style.style_id === selectedStyle);
  };

  const getPrice = () => {
    const style = getStyle();
    return style ? style.original_price : product.default_price;
  };

  return (
    <div>
      <h1>Over View</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 3 }}>
          {!styles[0] ? null : <div style={{ backgroundImage: `url(${styles[0].photos[0].url})`, width: '100px', height: '100px', backgroundSize: 'cover'}}></div>}
          <img src={styles[0]?.photos[0].url} />
        </div>
        <div style={{ flex: 1 }}>
          <h3>{product.category}</h3>
          <h3>{product.name}</h3>
          <h3>{getPrice()}</h3>
          <div style={{ display: 'flex' }}>
            {styles.map(style => (
              <Avatar
                key={style.style_id}
                url={style.photos[0].thumbnail_url}
                onClick={() => setSelectedStyle(style.style_id)}
              />
            ))}
          </div>
          <Button>Click Me!</Button>
        </div>
      </div>
      <h3>{product.slogan}</h3>
      <h3>{product.description}</h3>
    </div>
  );
};

export default OverView;
