import { INodeProperties } from 'n8n-workflow';

export const cashFlowOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cash-flow'],
			},
		},
		options: [
			{
				name: 'Consultar',
				value: 'get-cash-flow',
				action: 'Consultar fluxo de caixa',
				description: 'Retorna o fluxo de caixa',
			},
		],
		default: 'get-cash-flow',
		description: 'Define a operação a ser realizada com fluxo de caixa',
	},
];
