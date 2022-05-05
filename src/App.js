import React from 'react';
import './style.scss';

//import Components
import { Calculator } from './Components/Calculator';
import { Header } from './Components/Header';
import { FormTips } from './Components/FormTips';
import { Result } from './Components/Result';
import { GeneralInput } from './Components/GeneralInput';
import { Tips } from './Components/Tips';
import { PersonalAmount } from './Components/PersonalAmount';
import { ResetButton } from './Components/ResetButton';

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
  const [state, setState] = React.useState({
    Total: 0,
    Tips: 0,
    TipsAmout: 0,
    Person: 1,
    tipsByPerson: 0,
    AmountByPerson: 0,
  });

  console.log('Total', state);

  return (
    <main className="App">
      <div className="App-Container">
        <div className="App-Content">
          <Header />
          <Calculator>
            <FormTips>
              <GeneralInput
                label="Bill"
                icon="Dolar"
                state={state}
                setState={setState}
              />
              <Tips />
              <GeneralInput label="Number of People" icon="people" />
            </FormTips>
            <Result>
              <PersonalAmount label="Tips" data={state.tipsByPerson} />
              <PersonalAmount label="Total" data={state.AmountByPerson} />
              <ResetButton />
            </Result>
          </Calculator>
        </div>
      </div>
    </main>
  );
}
