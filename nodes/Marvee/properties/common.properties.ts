import { INodeProperties } from 'n8n-workflow';

export const commonProperties: INodeProperties[] = [
	{
		displayName: 'Recurso',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Ano',
				value: 'years',
			},
			{
				name: 'Categoria',
				value: 'categories',
			},
			{
				name: 'Cliente',
				value: 'customers',
			},
			{
				name: 'Conta',
				value: 'accounts',
			},
			{
				name: 'Extrato',
				value: 'statement',
			},
			{
				name: 'Fluxo De Caixa',
				value: 'cash-flow',
			},
			{
				name: 'Venda (Em Breve)',
				value: 'sales',
				disabledOptions: {
					hide: {
						resource: ['*'],
					},
				},
			},
		],
		default: 'statement',
		description: 'Recurso a ser acessado na API Marvee',
	},
];
