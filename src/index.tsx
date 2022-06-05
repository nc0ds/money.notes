import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { GlobalStyles } from './styles/global';
import { makeServer } from './services/mirage';
import { TransactionsProvider } from './hooks/useTransactionsContext';

makeServer('development');

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<TransactionsProvider>
			<App />
		</TransactionsProvider>
	</React.StrictMode>
);
