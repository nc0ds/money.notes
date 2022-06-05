import styled from 'styled-components';

export const Container = styled.section`
	& > button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		border: none;
		background-color: transparent;
	}
`;

export const Content = styled.article`
	width: 100%;
	padding: 2rem;

	& > h2 {
		font-weight: 500;
		margin-bottom: 2rem;
	}

	& > form {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& > input {
			width: 100%;
			height: 4rem;
			background-color: var(--purple);
			border: none;
			border-radius: 6px;
			padding: 0 1rem;
			font-size: 1rem;
		}

		& > button {
			width: 100%;
			height: 4rem;
			background-color: var(--green);
			color: var(--purple);
			border: none;
			border-radius: 6px;
			font-size: 1rem;
			font-weight: 600;
		}

		& > div {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}
`;

type TransactionTypeButtonProps = {
	transactionType: 'income' | 'outcome';
	isActive: boolean;
};

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border: 1px solid var(--title);
	border-radius: 6px;
	color: var(--title);
	background-color: ${({ transactionType, isActive }) =>
		isActive
			? transactionType === 'income'
				? `var(--transparent-green)`
				: `var(--transparent-red)`
			: `transparent`};
`;
