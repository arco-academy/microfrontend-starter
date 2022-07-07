import React from 'react';

import { CountProvider } from '@mcf-core/Count'

import Teste from './Teste'


function App() {
  return (
    <CountProvider>
      <Teste />
    </CountProvider>
  );
}

export default App;
