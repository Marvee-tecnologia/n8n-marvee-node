import { INodeProperties } from 'n8n-workflow';

export const getSalesFields: INodeProperties[] = [
	{
		displayName: 'Data Início',
		name: 'startDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['get-sales'],
			},
		},
		default: '',
		description: 'Data de início para filtrar vendas',
	},
	{
		displayName: 'Data Fim',
		name: 'endDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['get-sales'],
			},
		},
		default: '',
		description: 'Data de fim para filtrar vendas',
	},
	{
		displayName: 'Cliente ID',
		name: 'clienteIdFilter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['get-sales'],
			},
		},
		default: '',
		description: 'ID do cliente para filtrar vendas',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['get-sales'],
			},
		},
		options: [
			{
				name: 'Todas',
				value: '',
			},
			{
				name: 'Pendente',
				value: 'pendente',
			},
			{
				name: 'Confirmada',
				value: 'confirmada',
			},
			{
				name: 'Cancelada',
				value: 'cancelada',
			},
		],
		default: '',
		description: 'Status da venda para filtrar',
	},
];
