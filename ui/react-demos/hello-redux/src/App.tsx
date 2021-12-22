import React from 'react';
import { Counter } from './components/Counter';
import { CounterButtons } from './components/CounterButtons';
import { Loader } from './components/Loader';

function App() {
  return (
    <>
      <Counter/>
      <CounterButtons/>
    </>
  );
}

export default App;
