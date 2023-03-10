import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import AppRoutes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);