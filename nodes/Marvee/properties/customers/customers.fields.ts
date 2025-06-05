import { INodeProperties } from 'n8n-workflow';

export const customersFields: INodeProperties[] = [
	{
		displayName: 'Limitar Resultado',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['get-customers'],
			},
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['get-customers'],
			},
		},
		default: 0,
		description: 'Número de registros a serem ignorados do início',
	},
];
