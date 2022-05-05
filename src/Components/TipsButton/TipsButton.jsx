import React from 'react';
import './TipsButton.style.scss';

export const TipsButton = ({ item }) => {
  return (
    <>
      {item === 'Custom' ? (
        <input placeholder={item} />
      ) : (
        <button className="TipsButton">{item}%</button>
      )}
    </>
  );
};
