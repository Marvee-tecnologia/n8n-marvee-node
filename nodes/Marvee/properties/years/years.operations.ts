import { INodeProperties } from 'n8n-workflow';

export const yearsOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['years'],
			},
		},
		options: [
			{
				name: 'Consultar',
				value: 'get-years',
				action: 'Consultar anos',
				description: 'Retorna os anos',
			},
		],
		default: 'get-years',
		description: 'Define a operação a ser realizada com anos',
	},
];
