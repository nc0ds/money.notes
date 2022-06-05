import { FormEvent, FunctionComponent, useState, useEffect } from 'react';
import ReactModal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, Content, TransactionTypeButton } from './styles';
import { MaskedInput } from '../MaskedInput';
import { useTransactionsContext } from '../../hooks/useTransactionsContext';

type NewTransactionModalProps = {
	isOpen: boolean;
	handleClose: () => void;
};

type EventTargetList = {
	transactionTitle: { value: string };
	transactionPrice: { value: string };
	transactionCategory: { value: string };
};

export const NewTransactionModal: FunctionComponent<
	NewTransactionModalProps
> = ({ isOpen, handleClose }) => {
	const { createTransaction } = useTransactionsContext();

	const [transactionType, setTransactionType] = useState<
		'income' | 'outcome' | string
	>('');

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { transactionTitle, transactionPrice, transactionCategory } =
			e.target as EventTarget & EventTargetList;

		const newTransactionData = {
			title: transactionTitle.value.trim(),
			amount: Number(
				transactionPrice.value
					.replace(/\D/gim, '')
					.replace(/(\d)(\d{2})$/, '$1.$2')
			),
			type: transactionType as 'income' | 'outcome',
			category: transactionCategory.value.trim(),
		};

		try {
			await createTransaction(newTransactionData);
			handleClose();
		} catch (err) {
			alert('Deu merda');
			console.log(err);
		}
	};

	useEffect(() => {
		setTransactionType('');
	}, [handleClose]);

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={() => {
				handleClose();
			}}
			className='react-modal'
			overlayClassName='overlay-react-modal'
		>
			<Container>
				<button
					type='button'
					onClick={() => {
						handleClose();
					}}
				>
					<img src={closeImg} alt='' />
				</button>
				<Content>
					<h2>Cadastrar transação</h2>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Título'
							id='transactionTitle'
							required
						/>
						<MaskedInput
							mask='currency'
							placeholder='Preço'
							id='transactionPrice'
						/>
						<div>
							<TransactionTypeButton
								type='button'
								transactionType='income'
								isActive={transactionType === 'income'}
								onClick={() => setTransactionType('income')}
							>
								<img src={incomeImg} alt='' /> Entrada
							</TransactionTypeButton>
							<TransactionTypeButton
								type='button'
								transactionType='outcome'
								isActive={transactionType === 'outcome'}
								onClick={() => setTransactionType('outcome')}
							>
								<img src={outcomeImg} alt='' /> Saída
							</TransactionTypeButton>
						</div>
						<input
							type='text'
							placeholder='Categoria'
							id='transactionCategory'
							required
						/>
						<button type='submit'>Cadastrar</button>
					</form>
				</Content>
			</Container>
		</ReactModal>
	);
};
