import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Hpa, { useDialog } from '@eureka/hybrid-portal-adapter';
import * as TestPlugin from 'lzx-test-plugin';

import a from './a';

debugger;

let cleanupFn = Hpa.init({ env: 'stand_alone', container: document.querySelector('body') });

TestPlugin.testFn();

// ReactDOM.createRoot(document.getElementById('app'));
