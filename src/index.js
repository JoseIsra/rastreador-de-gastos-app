import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer , {initialState } from './context/reducer'
import { DataLayer } from './context/DataLayer';
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId="f873f3cd-2ce6-4bdf-b043-2055b222d5d1" language="en-US">
    <DataLayer initialState={initialState} reducer={reducer} >
    <App />
    </DataLayer>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

