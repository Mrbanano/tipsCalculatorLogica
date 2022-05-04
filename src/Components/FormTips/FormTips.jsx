import React from 'react';
import './FormTips.styles.scss';

export const FormTips = ({ children }) => {
  return (
    <section className="FormTips">
      <div className="FormTips-Container">
        <div className="FormTips-Content">{children}</div>
      </div>
    </section>
  );
};
