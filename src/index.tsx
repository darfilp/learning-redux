import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

// в reducer -  state, action это обьект в котором два поля это децствие и данные для этого дкйствия 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />          
    </Provider>
        
  </React.StrictMode>
);
