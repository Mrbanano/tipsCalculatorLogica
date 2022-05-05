import React from 'react';
import './PersonalAmount.styles.scss';

export const PersonalAmount = ({ label, data }) => {
  return (
    <div className="PersonalAmount">
      <div className="PersonalAmountText">
        <p>{label}</p>
        <span>/person</span>
      </div>
      <div className="PersonalAmountPrice">
        <p> {data === 0 ? '$ 0.00' : `$ ${data}`}</p>
      </div>
    </div>
  );
};
