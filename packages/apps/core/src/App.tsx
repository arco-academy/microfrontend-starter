import React  from 'react';

import Mcf from './Mcf'

import { CountProvider } from './context/count'

function App() {
  
  return (
    <CountProvider>
      <Mcf />
    </CountProvider>
  );
}

export default App;
