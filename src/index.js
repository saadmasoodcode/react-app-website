import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter basename="https://saadmasoodcode.github.io/react-app-website">
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
