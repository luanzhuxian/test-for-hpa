import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { init, Alert, Dialog } from '@eureka/hybrid-portal-adapter';

import * as TestPlugin from 'lzx-test-plugin';

import x, { y } from './a';

// console.log(x);

init({ env: 'dxp' });

// console.log(a);
console.log(Alert);
// const d = new Dialog(
//   {},
//   {
//     path: '/deploy-app',
//     modalSettings: {
//       title: 'Deploy App',
//       size: 'l',
//     },
//   },
// );
// console.log(d);
// console.log(LuigiHelper);

// debugger;

// init({ env: 'stand_alone' });

// TestPlugin.testFn();

const App = () => {
  const [a, setA] = useState('666');

  return <div>{a}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
