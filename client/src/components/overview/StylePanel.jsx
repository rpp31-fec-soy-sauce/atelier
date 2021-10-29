import React from 'react';
import Avatar from './styles/Avatar.styled';

const StylePanel = ({ styles, currentStyle, setSelectedStyle }) => {
  
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
            onClick={() => setSelectedStyle(style.style_id)}
          />
        ))}
      </div>
    </>
  );
};

export default StylePanel;
