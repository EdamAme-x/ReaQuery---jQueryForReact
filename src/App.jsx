import React, { useState, useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReaQuery from './lib/ReaQuery';

function App() {
  const [count, setCount] = useState(0);
  const $ = new ReaQuery(); // 初期化
  const ref = $.Ref(); // refを取得

  useEffect(() => {
    $.Set(ref); // refをセット
  }, []); // 最初のリロード

  return (
    <>
      <div ref={ref}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button
            onClick={() => {
              const elements = $.get('p');
              console.log(elements);
            }}
          >
            TextChange
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
