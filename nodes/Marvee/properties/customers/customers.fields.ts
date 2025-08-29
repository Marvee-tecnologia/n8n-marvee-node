import { INodeProperties } from 'n8n-workflow';

export const customersFields: INodeProperties[] = [
		{
			type: 'string',
			default: '',
			displayName: 'CNPJ/CPF',
			name: 'cnpjcpf',
			displayOptions: {
				show: {
					resource: ['customers'],
					operation: ['get-customers'],
				},
			},
			placeholder: 'Digite o CNPJ ou CPF do cliente',
			description: 'CNPJ ou CPF do cliente para filtrar (opcional)',
	},
	{
		type: 'string',
		default: '',
		displayName: 'Nome',
		name: 'name',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['get-customers'],
			},
		},
		placeholder: 'Digite o nome do cliente',
		description: 'Nome do cliente para filtrar (opcional)',
	},
	{
		type: 'string',
		default: '',
		displayName: 'Nome Fantasia',
		name: 'fantasy_name',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['get-customers'],
			},
		},
		placeholder: 'Digite o nome fantasia do cliente',
		description: 'Nome fantasia do cliente para filtrar (opcional)',
	},
	{
		type: 'options',
		default: 'active',
		displayName: 'Status',
		name: 'status',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['get-customers'],
			},
		},
		options: [
			{
				name: 'Ativos',
				value: 'active',
				description: 'Clientes ativos',
			},
			{
				name: 'Inativos',
				value: 'inactive',
				description: 'Clientes inativos',
			},
			{
				name: 'Todos',
				value: 'all',
				description: 'Todos os clientes, ativos e inativos',
			},
		],
		description: 'Filtrar clientes por status',
	}
];
