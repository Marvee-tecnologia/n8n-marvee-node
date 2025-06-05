import { INodeProperties } from 'n8n-workflow';

export const createUpdateSalesFields: INodeProperties[] = [
	{
		displayName: 'Cliente Name or ID',
		name: 'clienteId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getMarveeCustomers',
			loadOptionsDependsOn: ['resource', 'operation'],
			searchable: true,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['create-sales', 'update-sales'],
			},
		},
		default: '',
		description:
			'Escolha o cliente da lista. Escolha da lista ou especifique um ID via <a href="https://docs.n8n.io/code/expressions/">expressão</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Produto ID',
		name: 'produtoId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['create-sales', 'update-sales'],
			},
		},
		default: '',
		description: 'ID do produto',
	},
	{
		displayName: 'Quantidade',
		name: 'quantidade',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['create-sales', 'update-sales'],
			},
		},
		default: 1,
		description: 'Quantidade de produtos',
	},
	{
		displayName: 'Valor Unitário',
		name: 'valorUnitario',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['create-sales', 'update-sales'],
			},
		},
		default: 0,
		description: 'Valor unitário do produto',
	},
	{
		displayName: 'Data Da Venda',
		name: 'dataVenda',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['create-sales', 'update-sales'],
			},
		},
		default: '',
	},
	{
		displayName: 'Descrição',
		name: 'descricao',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['create-sales', 'update-sales'],
			},
		},
		default: '',
		description: 'Descrição da venda',
	},
];
