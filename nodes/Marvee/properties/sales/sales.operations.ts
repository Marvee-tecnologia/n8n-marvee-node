import { INodeProperties } from 'n8n-workflow';

export const salesOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sales'],
			},
		},
		options: [
			{
				name: 'Atualizar',
				value: 'update-sales',
				action: 'Atualizar venda',
				description: 'Atualiza uma venda existente',
			},
			{
				name: 'Cadastrar',
				value: 'store-sales',
				action: 'Cadastrar venda',
				description: 'Cadastra uma nova venda com todos os dados necessários',
			},
			{
				name: 'Consultar',
				value: 'get-sales',
				action: 'Consultar vendas',
				description: 'Consulta as vendas',
			},
			{
				name: 'Deletar',
				value: 'delete-sales',
				action: 'Deletar venda',
				description: 'Deleta uma venda existente',
			},
			{
				name: 'Obter Por ID',
				value: 'get-sales-by-id',
				action: 'Obter venda por ID',
				description: 'Obtém uma venda específica por ID',
			},
		],
		default: 'get-sales',
		description: 'Define a operação a ser realizada no recurso Vendas',
	},
];
