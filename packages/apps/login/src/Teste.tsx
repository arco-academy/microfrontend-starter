import React, { useContext } from 'react';

import Count from '@mcf-core/Count'


function App() {
  const { count, setCount } = useContext(Count)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Microfrontend 2
        </p>
        <button onClick={() => setCount(count + 1)}>
          Aumentar valor MCF 1
        </button>
      </header>
    </div>
  );
}

export default App;
