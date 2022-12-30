import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { AppWrapper } from './components/AppWrapper';
import { register as registerServiceWorker } from './serviceWorkerRegistration';

import './styles/app.scss';

const isDesktop = window.innerWidth >= 1024;
const mobileApp = <App/>;
const desktopApp = <AppWrapper startUrl={window.location.pathname}/>;
const app = isDesktop ? desktopApp : mobileApp;

ReactDOM.createRoot(document.querySelector('.app-content') as HTMLDivElement).render(
    <React.StrictMode>{app}</React.StrictMode>
);

registerServiceWorker();

window.addEventListener('scroll', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});
