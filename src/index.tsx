import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import {Home} from './pages/Home';
import { Initial } from './pages/initial';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Home />
      <Initial />
  </React.StrictMode>
);


