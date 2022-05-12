import React, { useContext } from 'react';
import './PersonalAmount.styles.scss';

//Import Context
import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

export const PersonalAmount = ({ label }) => {
  const { AmountByPerson, tipsByPerson } = useContext(CalculatorContext);

  const show = label == 'Tips' ? tipsByPerson : AmountByPerson;

  const showFormat = show.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="PersonalAmount">
      <div className="PersonalAmountText">
        <p>{label}</p>
        <span>/person</span>
      </div>
      <div className="PersonalAmountPrice">
        <p> {show == 0 ? '$ 0.00' : showFormat}</p>
      </div>
    </div>
  );
};
