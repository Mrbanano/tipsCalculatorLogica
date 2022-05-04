import React from 'react';

export const CustomInput = ({ placeholder, icon, state, setState }) => {
  const onChange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <div className="CustomInput">
      <div className="CustomInput-Container">
        <div className="CustomInput-Content">
          <img src={icon} alt={placeholder} />
          <input type="number" />
        </div>
      </div>
    </div>
  );
};
