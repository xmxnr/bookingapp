import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>
	</StrictMode>,
);
