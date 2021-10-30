import React, { useEffect, useState } from 'react';

import Select from './styles/Select.styled';
import Button from '../styles/Button.styled.js';

const getMaxQuantity = (currentStyle, skusNum) => {
  if (!skusNum) return 0;
  // TODO: Deal with style change
  if (!currentStyle.skus[skusNum]) return 0;
  const quantity = parseInt(currentStyle.skus[skusNum].quantity);
  return quantity > 15 ? 15 : quantity;
};

const ButtonPanel = ({ currentStyle }) => {
  const [skus, setSkus] = useState(undefined);
  const [quantity, setQuantity] = useState(1);

  // TODO: Deal with style change
  useEffect(() => {
    setSkus(undefined);
    setQuantity(1);
  }, [currentStyle]);

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* <Select style={{ flex: 1 }} onChange={e => setSkus(e.target.value)}>
          {skus === undefined ? <option selected>Select Size</option> : null}
          {!currentStyle
            ? null
            : Object.keys(currentStyle.skus).map(skusNum => (
                <option
                  key={skusNum}
                  value={skusNum}
                  selected={skusNum === skus}
                >
                  {currentStyle.skus[skusNum].size}
                </option>
              ))}
        </Select>
        <Select onChange={e => setQuantity(e.target.value)}>
          {skus === undefined ? <option selected>-</option> : null}
          {[...Array(getMaxQuantity(currentStyle, skus)).keys()].map(num => (
            <option key={num + 1}>{num + 1}</option>
          ))}
        </Select> */}
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button style={{ fontSize: '1.5rem', flex: 1 }}>ADD TO BAG</Button>
        <Button>Star</Button>
      </div>
    </>
  );
};

export default ButtonPanel;
