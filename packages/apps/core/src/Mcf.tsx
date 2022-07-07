import React, { useContext } from 'react';

import AppLogin from '@mcf-login/App';

import Count from './context/count'

function Mcf() {

  const { count } = useContext(Count)

  return (
    <div className="App">
      <h4>{count}</h4>
      <header className="App-header">
        <p>
          Microfrontend 1
        </p>
        <AppLogin />
      </header>
    </div>
  );
}

export default Mcf;
