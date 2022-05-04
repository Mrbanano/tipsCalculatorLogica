import React from 'react';
import './style.css';

const TipCalc = (amount, tipsAmount = 15) => {
  return amount * (tipsAmount / 100);
};

const TotalCalc = (amount, tipsAmount) => {
  return Number.parseFloat(amount) + Number.parseFloat(tipsAmount);
};

const TipByPerson = (tipsAmount, PersonNumber) => {
  return Number.parseFloat(tipsAmount) / Number.parseFloat(PersonNumber);
};

const AmountByPerson = (Amount, PersonNumber) => {
  return Amount / PersonNumber;
};

export default function App() {
  const [tips, setTips] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [personas, setPersonas] = React.useState(1);
  const [tipsByPerson, setTipsByPerson] = React.useState(0);

  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="De cuanto es tu cuenta ?"
          onChange={(e) => {
            let value = e.target.value;
            setTips(TipCalc(value));
            setTotal(TotalCalc(value, TipCalc(value)));
          }}
        />
        <input
          type="text"
          placeholder="Numero de personas ?"
          onChange={(e) => {
            setPersonas(e.target.value);
            console.log(tips, personas);
            setTipsByPerson(TipByPerson(tips, e.target.value));
          }}
        />
      </div>
      <div className="">
        <p>Total a pagar</p>
        <p> {total === 0 ? '$ 0.00 MXN' : `$ ${total} MXN`}</p>
      </div>
      <div className="">
        <p>Total de Propina</p>
        <p> {tips === 0 ? '$ 0.00 MXN' : `$ ${tips} MXN`}</p>
      </div>
      <div className="">
        <p>Propinas por persona</p>
        <p>{tipsByPerson === 0 ? '$ 0.00 MXN' : `$ ${tipsByPerson} MXN`}</p>
      </div>
      <div className="">
        <p>Monto por persona</p>
        <p>$ 0.00 MXN</p>
      </div>
      <div className="">
        <p>Total por persona</p>
        <p>$ 0.00 MXN</p>
      </div>
    </div>
  );
}
