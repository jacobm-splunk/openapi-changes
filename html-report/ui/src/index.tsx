import React from 'react';
import ReactDOM from 'react-dom/client';
import {OpenAPIChanges} from "@/OpenAPIChanges";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// as we're created, ping up to the sky, let them know we're online and working.
window.parent.postMessage("loaded","*")

//import data from '../data.json'
let data: any
root.render(
   <React.StrictMode>
    <OpenAPIChanges report={data}/>
   </React.StrictMode>
);

