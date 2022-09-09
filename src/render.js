import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessageFunc} from './redux/state';


export let renderTree = (state)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addMessageFunc={addMessageFunc}/>
    </React.StrictMode>
  );
}
