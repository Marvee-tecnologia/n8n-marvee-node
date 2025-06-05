import { INodeProperties } from 'n8n-workflow';

export const statementOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['statement'],
			},
		},
		options: [
			{
				name: 'Consultar',
				value: 'get-statement',
				action: 'Consultar extrato',
				description: 'Consulta o extrato bancário',
			},
		],
		default: 'get-statement',
		description: 'Define a operação a ser realizada no recurso Extrato',
	},
];
