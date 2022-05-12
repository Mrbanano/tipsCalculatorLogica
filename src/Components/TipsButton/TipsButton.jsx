import React, { useContext } from 'react';
import './TipsButton.style.scss';

//Import Context
import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

/***\
 * Pasos para consumir un context
 *   1 importar el hook useContext
 *   2 importar el context (linea 5)
 *   3 ejecutar el hook pasandole el contexto y guadandolo en un const
 */

export const TipsButton = ({ item }) => {
  const { Calc } = useContext(CalculatorContext);

  const HandleTips = () => {
    Calc(item);
  };

  return (
    <>
      {item === 'Custom' ? (
        <input className="TipsButtonCustom" placeholder={item} />
      ) : (
        <button className="TipsButton" onClick={HandleTips}>
          {item}%
        </button>
      )}
    </>
  );
};
