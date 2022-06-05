import { FunctionComponent } from 'react';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

type HeaderProps = {
	handleOpenNewTransactionModal: () => void;
};

export const Header: FunctionComponent<HeaderProps> = ({
	handleOpenNewTransactionModal,
}) => {
	return (
		<Container>
			<div>
				<img src={logo} alt='money.notes' />
				<button type='button' onClick={handleOpenNewTransactionModal}>
					Nova transação
				</button>
			</div>
		</Container>
	);
};
