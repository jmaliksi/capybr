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

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://jmaliksi.github.io/capybr"/>
            <meta property="og:title" content="capybr"/>
            <meta property="og:description" content="find the capybara of your dreams"/>

            
            <meta property="twitter:url" content="https://jmaliksi.github.io/capybr"/>
            <meta property="twitter:title" content="capybr"/>
            <meta property="twitter:description" content="find the capybara of your dreams"/>
        </Helmet>
        <App />
    </>
);
