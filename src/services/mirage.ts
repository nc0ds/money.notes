import { createServer, Model } from 'miragejs';

export const makeServer = (environment = 'test') => {
	const server = createServer({
		environment,
		models: {
			transaction: Model,
		},
		seeds(server) {
			server.db.loadData({
				transactions: [
					{
						id: 1,
						title: 'Desenvolvimento de site',
						amount: 7000,
						type: 'income',
						category: 'Trabalho',
						createdAt: new Date('2022-05-28 20:00'),
					},
					{
						id: 2,
						title: 'Celular',
						amount: 2349.99,
						type: 'outcome',
						category: 'Equipamento',
						createdAt: new Date('2022-05-30 18:00'),
					},
				],
			});
		},
		routes() {
			this.namespace = 'api';

			this.get('/transactions', (schema) => {
				return schema.all('transaction');
			});

			this.post('/transactions', (schema, req) => {
				const attr = JSON.parse(req.requestBody);
				return schema.create('transaction', {
					...attr,
					createdAt: new Date(),
				});
			});
		},
	});

	return server;
};
