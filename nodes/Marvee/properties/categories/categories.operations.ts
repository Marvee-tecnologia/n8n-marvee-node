import { INodeProperties } from 'n8n-workflow';

export const categoriesOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['categories'],
			},
		},
		options: [
			{
				name: 'Consultar',
				value: 'get-categories',
				action: 'Consultar categorias',
				description: 'Retorna a lista de todas as categorias',
			},
		],
		default: 'get-categories',
		description: 'Define a operação a ser realizada com categorias',
	},
];
