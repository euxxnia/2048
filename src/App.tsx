import './App.css';

import { useState } from 'react';

import Board from './components/Board.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>2048</h1>
      <Board />
    </>
  );
}

export default App;
