import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
//import App from '../App';
import AppRouter from './router/AppRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Suspense fallback={<div>Loading....</div>}>
      <AppRouter />
    </Suspense>
  </React.StrictMode>
);
