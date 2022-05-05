import React from 'react';
import './Tips.styles.scss';

import { TipsButton } from '../TipsButton';

const TipsNumber = [
  { tip: 5 },
  { tip: 10 },
  { tip: 15 },
  { tip: 25 },
  { tip: 50 },
  { tip: 'Custom' },
];

export const Tips = () => {
  return (
    <section className="Tips">
      <div className="Tips-Container">
        <p>Select Tip %</p>
        <div className="Tips-Content">
          {TipsNumber.map((item) => (
            <TipsButton key={item.tip} item={item.tip} />
          ))}
        </div>
      </div>
    </section>
  );
};
