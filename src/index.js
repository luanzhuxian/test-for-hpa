import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { init, Alert, goBack, a } from '@eureka/hybrid-portal-adapter/dist/dev/esm';

import * as TestPlugin from 'lzx-test-plugin';

import x, { y } from './a';

// console.log(x);

init({});
// init({ env: 'stand_alone' });

// console.log(a);
console.log(goBack);
console.log(Alert);

// debugger;

// TestPlugin.testFn();

const App = () => {
  const [a, setA] = useState('666');

  return <div>{a}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
