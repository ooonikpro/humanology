import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { register as registerServiceWorker } from './serviceWorkerRegistration';

import './styles/app.scss';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLDivElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

registerServiceWorker();
