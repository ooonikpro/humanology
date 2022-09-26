import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { register as registerServiceWorker } from './serviceWorkerRegistration';

import './styles/app.scss';

ReactDOM.createRoot(document.querySelector('.app-content') as HTMLDivElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

registerServiceWorker();
