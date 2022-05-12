import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

//Import Context
import { CalculatorProvider } from './Context/Calculator/CalculatorContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </StrictMode>
);
