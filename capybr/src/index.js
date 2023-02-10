import React from 'react';
import ReactDOM from 'react-dom/client';
import "typeface-inter";
import './index.css';
import App from './App';
import {Helmet} from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Helmet>
            <title>capybr</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content="find the capybara of your dreams"/>
        </Helmet>
        <App />
    </>
);
