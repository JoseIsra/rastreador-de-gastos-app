import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer , {initialState } from './context/reducer'
import { DataLayer } from './context/DataLayer';


ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer} >
    <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

