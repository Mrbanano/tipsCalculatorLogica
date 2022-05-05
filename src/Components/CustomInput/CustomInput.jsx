import React from 'react';
import './CustomInput.styles.scss';

export const CustomInput = ({ placeholder, icon, state, setState }) => {
  const onChange = ({ target }) => {
    setState({
      ...state,
      Total: target.value,
    });
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
          <input className="InputCero" type="number" onChange={onChange} />
        </div>
      </div>
    </div>
  );
};
