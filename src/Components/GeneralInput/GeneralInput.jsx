import React from 'react';
import './GeneralInput.styles.scss';

import { CustomInput } from '../CustomInput';

export const GeneralInput = ({ label, icon, state, setState }) => {
  return (
    <div className="GeneralInput">
      <div className="GeneralInput-Container">
        <div className="GeneralInput-Content">
          <p>{label}</p>
          <CustomInput icon={icon} state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
};
