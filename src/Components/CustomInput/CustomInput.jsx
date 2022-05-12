import React, { useContext } from 'react';
import './CustomInput.styles.scss';

//Import Context

import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

export const CustomInput = ({ placeholder, icon, name }) => {
  const Context = useContext(CalculatorContext);

  const onChange = ({ target }) => {
    Context.setInfo(target.value, target.name);
  };

  return (
    <div className="CustomInput">
      <div className="CustomInput-Container">
        <div className="CustomInput-Content">
          <img
            src={
              icon === 'people'
                ? 'https://i.postimg.cc/xTR2Q7cV/people.png'
                : 'https://i.postimg.cc/1XQkhcSz/dolar.png'
            }
            alt={placeholder}
          />
          <input
            className="InputCero"
            type="number"
            onChange={onChange}
            name={name}
            value={Context[name]}
          />
        </div>
      </div>
    </div>
  );
};
