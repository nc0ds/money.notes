import { FunctionComponent } from 'react';
import { useTransactionsContext } from '../../../hooks/useTransactionsContext';

import { Container } from './styles';

export const TransactionsTable: FunctionComponent = () => {
	const { transactions } = useTransactionsContext();

	return (
		<Container>
			{transactions.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Título</th>
							<th>Preço</th>
							<th>Categoria</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((item, index) => (
							<tr key={`list-item-${index}`}>
								<td>{item.title}</td>
								<td className={item.type}>
									{item.type === 'outcome' && '- '}
									{Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL',
									}).format(item.amount)}
								</td>
								<td>{item.category}</td>
								<td>
									{Intl.DateTimeFormat('pt-BR').format(
										new Date(item.createdAt)
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>
					Clique em <i>Nova transação</i> e adicione seu primeiro registro :)
				</p>
			)}
		</Container>
	);
};
