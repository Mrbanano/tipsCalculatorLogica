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

export default function App() {
  const [state, setState] = React.useState({
    Total: 0,
    Tips: 0,
    TipsAmout: 0,
    Person: 1,
    tipsByPerson: 0,
    AmountByPerson: 0,
  });

  return (
    <main className="App">
      <div className="App-Container">
        <div className="App-Content">
          <Header />
          <Calculator>
            <FormTips>
              <GeneralInput label="Bill" icon="Dolar" name="Amount" />
              <Tips />
              <GeneralInput
                label="Number of People"
                icon="people"
                name="Person"
              />
            </FormTips>
            <Result>
              <section>
                <PersonalAmount label="Tips" data={state.tipsByPerson} />
                <PersonalAmount label="Total" data={state.AmountByPerson} />
              </section>
              <ResetButton />
            </Result>
          </Calculator>
        </div>
      </div>
    </main>
  );
}
