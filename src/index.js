import React from 'react';
import ReactDOM from 'react-dom/client';
import "typeface-inter";
import './index.css';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
