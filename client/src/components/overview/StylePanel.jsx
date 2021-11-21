import React from 'react';
import Avatar from './styles/Avatar.styled';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducer';

const StylePanel = ({ styles, currentStyle, setSelectedStyle }) => {

  const dispatch = useDispatch();

  const onStyleChanged = style => {
    dispatch(actions.currentStyleChanged(style.style_id));
    setSelectedStyle(style.style_id);
  }
  
  return (
    <>
      <span>
        <b>{'STYLE > '}</b>
        {currentStyle?.name}
      </span>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {styles.map(style => (
          <Avatar
            key={style.style_id}
            url={style.photos[0].thumbnail_url}
            onClick={() => onStyleChanged(style)}
          />
        ))}
      </div>
    </>
  );
};

export default StylePanel;
