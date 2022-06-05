import {
	createContext,
	useState,
	useEffect,
	FunctionComponent,
	ReactNode,
	useContext,
} from 'react';
import { api } from '../services/api';

type TransactionType = {
	id: number;
	title: string;
	amount: number;
	type: 'income' | 'outcome';
	category: string;
	createdAt: Date;
};

type CreateTransactionType = Omit<TransactionType, 'id' | 'createdAt'>;

type TransactionsContextData = {
	transactions: TransactionType[];
	createTransaction?: (transaction: CreateTransactionType) => Promise<void>;
};

const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);

type TransactionsProviderProps = {
	children: ReactNode;
};

type CreateNewTransactionProps = Omit<TransactionType, 'id' | 'createdAt'>;

export const TransactionsProvider: FunctionComponent<
	TransactionsProviderProps
> = ({ children }) => {
	const [transactions, setTransactions] = useState<TransactionType[]>([]);

	const createTransaction = async ({
		title,
		amount,
		type,
		category,
	}: CreateNewTransactionProps) => {
		const newTransactionData = {
			title: title.trim(),
			amount,
			type: type.trim(),
			category: category.trim(),
		};

		const req = await api.post('/transactions', newTransactionData);
		const { transaction } = req.data;
		setTransactions((old) => [transaction, ...old]);
	};

	useEffect(() => {
		api
			.get('/transactions')
			.then(({ data }) => setTransactions([...data.transactions].reverse()));
	}, []);

	return (
		<TransactionsContext.Provider
			value={{
				transactions,
				createTransaction,
			}}
		>
			{children}
		</TransactionsContext.Provider>
	);
};

export const useTransactionsContext = () => {
	const context = useContext(TransactionsContext);
	return context;
};
