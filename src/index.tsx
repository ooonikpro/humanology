import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import {App} from './components/App';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLDivElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
