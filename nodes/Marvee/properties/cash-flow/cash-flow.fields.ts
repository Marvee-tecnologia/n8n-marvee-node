import { INodeProperties } from 'n8n-workflow';

export const cashFlowFields: INodeProperties[] = [
	{
		displayName: 'Ano',
		name: 'year',
		type: 'number',
		required: true,
		typeOptions: {
			minValue: 2000,
			maxValue: new Date().getFullYear(),
		},
		displayOptions: {
			show: {
				resource: ['cash-flow'],
				operation: ['get-cash-flow'],
			},
		},
		default: new Date().getFullYear(),
		description: 'Ano para consultar o fluxo de caixa',
	},
];
