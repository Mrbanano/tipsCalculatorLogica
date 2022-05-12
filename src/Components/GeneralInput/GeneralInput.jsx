import React from 'react';
import './GeneralInput.styles.scss';

import { CustomInput } from '../CustomInput';

export const GeneralInput = ({ label, icon, name }) => {
  return (
    <div className="GeneralInput">
      <div className="GeneralInput-Container">
        <div className="GeneralInput-Content">
          <p>{label}</p>
          <CustomInput icon={icon} name={name} />
        </div>
      </div>
    </div>
  );
};
