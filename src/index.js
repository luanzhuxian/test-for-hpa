import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import * as TestPlugin from 'lzx-test-plugin';

import a from './a';

debugger;

TestPlugin.testFn();

const App = () => {
  const [a, setA] = useState('666');

  return <div>{a}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
