import { useState } from 'react';
import ReactModal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

ReactModal.setAppElement('#root');

export const App = () => {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState<boolean>(false);

	const handleOpenNewTransactionModal = () => {
		setIsNewTransactionModalOpen(true);
	};

	const handleCloseNewTransactionModal = () => {
		setIsNewTransactionModalOpen(false);
	};

	return (
		<>
			<Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				handleClose={handleCloseNewTransactionModal}
			/>
		</>
	);
};
