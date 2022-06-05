import { FunctionComponent } from 'react';

import { Summary } from './Summary';
import { TransactionsTable } from './TransactionsTable';

import { Container } from './styles';

export const Dashboard: FunctionComponent = () => {
	return (
		<Container>
			<Summary />
			<TransactionsTable />
		</Container>
	);
};
