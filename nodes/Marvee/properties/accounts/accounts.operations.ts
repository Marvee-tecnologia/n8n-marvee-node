import { INodeProperties } from 'n8n-workflow';

export const accountsOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['accounts'],
			},
		},
		options: [
			{
				name: 'Consultar',
				value: 'get-accounts',
				action: 'Consultar contas',
				description: 'Retorna a lista de todas as contas',
			},
		],
		default: 'get-accounts',
		description: 'Define a operação a ser realizada com contas',
	},
];
