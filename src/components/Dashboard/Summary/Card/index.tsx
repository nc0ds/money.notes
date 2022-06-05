import { FunctionComponent } from 'react';

import { Container } from './styles';

import incomeImg from '../../../../assets/income.svg';
import outcomeImg from '../../../../assets/outcome.svg';
import totalImg from '../../../../assets/total.svg';

type CardProps = {
	isTotal?: boolean;
	value: number;
	title: 'Entradas' | 'Saídas' | 'Total';
};

export const Card: FunctionComponent<CardProps> = ({
	title,
	isTotal,
	value,
}) => {
	return (
		<Container isTotal={isTotal}>
			<header>
				<h3>{title}</h3>
				<img
					src={
						isTotal ? totalImg : title === 'Entradas' ? incomeImg : outcomeImg
					}
					alt={title}
				/>
			</header>
			<section>
				<p className={isTotal && value < 0 ? 'warning' : ''}>
					{Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(value)}
				</p>
			</section>
		</Container>
	);
};
