import { INodeProperties } from 'n8n-workflow';

export const salesIdFields: INodeProperties[] = [
	{
		displayName: 'ID Da Venda',
		name: 'salesId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['get-sales-by-id', 'update-sales', 'delete-sales'],
			},
		},
		default: '',
		description: 'ID da venda a ser processada',
	},
];
