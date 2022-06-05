import { FunctionComponent, useEffect, useState } from 'react';

import { Container } from './styles';

import { Card } from './Card';
import { useTransactionsContext } from '../../../hooks/useTransactionsContext';

type SummaryType = {
	income: number;
	outcome: number;
	total: number;
};

export const Summary: FunctionComponent = () => {
	const { transactions } = useTransactionsContext();

	const [summary, setSummary] = useState<SummaryType>({
		income: 0,
		outcome: 0,
		total: 0,
	});

	const updateCardsInfo = () => {
		setSummary(
			transactions.reduce(
				(total, item) => {
					if (item.type === 'income') {
						total.income += item.amount;
						total.total += item.amount;
					}

					if (item.type === 'outcome') {
						total.outcome += item.amount;
						total.total -= item.amount;
					}

					return total;
				},
				{
					income: 0,
					outcome: 0,
					total: 0,
				}
			)
		);
	};

	useEffect(() => {
		updateCardsInfo();
	}, [transactions]);

	return (
		<Container>
			<Card title='Entradas' value={summary.income} />
			<Card title='Saídas' value={summary.outcome} />
			<Card title='Total' value={summary.total} isTotal />
		</Container>
	);
};
