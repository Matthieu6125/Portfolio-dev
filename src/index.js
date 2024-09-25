import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'fr';
window.$secondaryLanguage = 'en';
window.$primaryLanguageIconId = 'fr-icon';
window.$secondaryLanguageIconId = 'uk-icon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorker.register();