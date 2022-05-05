import React from 'react';
import './TipsButton.style.scss';

export const TipsButton = ({ item }) => {
  return (
    <>
      {item === 'Custom' ? (
        <input className="TipsButtonCustom" placeholder={item} />
      ) : (
        <button className="TipsButton">{item}%</button>
      )}
    </>
  );
};
