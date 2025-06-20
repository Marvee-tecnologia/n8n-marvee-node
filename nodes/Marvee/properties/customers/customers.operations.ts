import { INodeProperties } from 'n8n-workflow';

export const customersOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customers'],
			},
		},
		options: [
			{
				name: 'Consultar',
				value: 'get-customers',
				action: 'Consultar clientes',
				description: 'Retorna a lista de todos os clientes',
			},
		],
		default: 'get-customers',
		description: 'Define a operação a ser realizada com clientes',
	},
];
