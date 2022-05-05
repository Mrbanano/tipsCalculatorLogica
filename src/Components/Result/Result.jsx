import React from 'react';
import './Result.styles.scss';
  
export const Result = ({ children }) => {
  return (
    <section className="Result">
      <div className="Result-Container">
        <div className="Result-Content">{children}</div>
      </div>
    </section>
  );
};
