import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { init } from '@eureka/hybrid-portal-adapter';

import * as TestPlugin from 'lzx-test-plugin';

import a from './a';

debugger;

init({ env: 'stand_alone' });

TestPlugin.testFn();

const App = () => {
  const [a, setA] = useState('666');

  return <div>{a}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
