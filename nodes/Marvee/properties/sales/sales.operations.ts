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
				name: 'Consultar',
				value: 'get-sales',
				action: 'Consultar vendas',
				description: 'Consulta as vendas',
			},
			{
				name: 'Criar',
				value: 'create-sales',
				action: 'Criar venda',
				description: 'Cria uma nova venda',
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
