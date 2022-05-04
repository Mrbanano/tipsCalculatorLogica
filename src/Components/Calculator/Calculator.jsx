import React from 'react';
import './Calculator.styles.scss';

export const Calculator = ({ children }) => {
  return (
    <section className="Calculator">
      <div className="Calculator-Container">
        <div className="Calculator-Content">{children}</div>
      </div>
    </section>
  );
};
