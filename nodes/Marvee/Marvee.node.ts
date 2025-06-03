import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Marvee implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Marvee',
		name: 'marvee',
		icon: 'file:marvee.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Marvee API',
		defaults: {
			name: 'Marvee',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'marveeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api-prod-aws.marvee.com.br/v1/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Recurso',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Extrato',
						value: 'statement',
					},
					{
						name: 'Venda',
						value: 'sales',
					},
				],
				default: 'statement',
			},
			// Statement Operations
			{
				displayName: 'Operação',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['statement'],
					},
				},
				options: [
					{
						name: 'Consultar',
						value: 'get-statement',
						action: 'Consultar extrato',
						description: 'Consulta o extrato bancário',
						routing: {
							request: {
								method: 'GET',
								url: '/extrato',
							},
						},
					},
				],
				default: 'get-statement',
			},
			// Sales Operations
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
						routing: {
							request: {
								method: 'PUT',
								url: '=/vendas/{{$parameter["salesId"]}}',
								body: {
									cliente_id: '={{$parameter["clienteId"]}}',
									produto_id: '={{$parameter["produtoId"]}}',
									quantidade: '={{$parameter["quantidade"]}}',
									valor_unitario: '={{$parameter["valorUnitario"]}}',
									data_venda: '={{$parameter["dataVenda"]}}',
									descricao: '={{$parameter["descricao"]}}',
								},
							},
						},
					},
					{
						name: 'Consultar',
						value: 'get-sales',
						action: 'Consultar vendas',
						description: 'Consulta as vendas',
						routing: {
							request: {
								method: 'GET',
								url: '/vendas',
							},
						},
					},
					{
						name: 'Criar',
						value: 'create-sales',
						action: 'Criar venda',
						description: 'Cria uma nova venda',
						routing: {
							request: {
								method: 'POST',
								url: '/vendas',
								body: {
									cliente_id: '={{$parameter["clienteId"]}}',
									produto_id: '={{$parameter["produtoId"]}}',
									quantidade: '={{$parameter["quantidade"]}}',
									valor_unitario: '={{$parameter["valorUnitario"]}}',
									data_venda: '={{$parameter["dataVenda"]}}',
									descricao: '={{$parameter["descricao"]}}',
								},
							},
						},
					},
					{
						name: 'Deletar',
						value: 'delete-sales',
						action: 'Deletar venda',
						description: 'Deleta uma venda existente',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/vendas/{{$parameter["salesId"]}}',
							},
						},
					},
					{
						name: 'Obter Por ID',
						value: 'get-sales-by-id',
						action: 'Obter venda por ID',
						description: 'Obtém uma venda específica por ID',
						routing: {
							request: {
								method: 'GET',
								url: '=/vendas/{{$parameter["salesId"]}}',
							},
						},
					},
				],
				default: 'get-sales',
			},
			// Statement Filters
			{
				displayName: 'Data Início',
				name: 'dataInicio',
				type: 'dateTime',
				displayOptions: {
					show: {
						resource: ['statement'],
						operation: ['get-statement'],
					},
				},
				default: '',
				description: 'Data de início para filtrar o extrato',
				routing: {
					request: {
						qs: {
							data_inicio: '={{$parameter["dataInicio"]}}',
						},
					},
				},
			},
			{
				displayName: 'Data Fim',
				name: 'dataFim',
				type: 'dateTime',
				displayOptions: {
					show: {
						resource: ['statement'],
						operation: ['get-statement'],
					},
				},
				default: '',
				description: 'Data de fim para filtrar o extrato',
				routing: {
					request: {
						qs: {
							data_fim: '={{$parameter["dataFim"]}}',
						},
					},
				},
			},
			{
				displayName: 'Tipo De Transação',
				name: 'tipoTransacao',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['statement'],
						operation: ['get-statement'],
					},
				},
				options: [
					{
						name: 'Todas',
						value: '',
					},
					{
						name: 'Débito',
						value: 'debito',
					},
					{
						name: 'Crédito',
						value: 'credito',
					},
				],
				default: '',
				description: 'Tipo de transação para filtrar',
				routing: {
					request: {
						qs: {
							tipo: '={{$parameter["tipoTransacao"]}}',
						},
					},
				},
			},
			{
				displayName: 'Valor Mínimo',
				name: 'valorMinimo',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['statement'],
						operation: ['get-statement'],
					},
				},
				default: '',
				description: 'Valor mínimo para filtrar transações',
				routing: {
					request: {
						qs: {
							valor_minimo: '={{$parameter["valorMinimo"]}}',
						},
					},
				},
			},
			{
				displayName: 'Valor Máximo',
				name: 'valorMaximo',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['statement'],
						operation: ['get-statement'],
					},
				},
				default: '',
				description: 'Valor máximo para filtrar transações',
				routing: {
					request: {
						qs: {
							valor_maximo: '={{$parameter["valorMaximo"]}}',
						},
					},
				},
			},
			// Sales Filters for List Operation
			{
				displayName: 'Data Início',
				name: 'dataInicio',
				type: 'dateTime',
				displayOptions: {
					show: {
						resource: ['sales'],
						operation: ['get-sales'],
					},
				},
				default: '',
				description: 'Data de início para filtrar vendas',
				routing: {
					request: {
						qs: {
							data_inicio: '={{$parameter["dataInicio"]}}',
						},
					},
				},
			},
			{
				displayName: 'Data Fim',
				name: 'dataFim',
				type: 'dateTime',
				displayOptions: {
					show: {
						resource: ['sales'],
						operation: ['get-sales'],
					},
				},
				default: '',
				description: 'Data de fim para filtrar vendas',
				routing: {
					request: {
						qs: {
							data_fim: '={{$parameter["dataFim"]}}',
						},
					},
				},
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
				routing: {
					request: {
						qs: {
							cliente_id: '={{$parameter["clienteIdFilter"]}}',
						},
					},
				},
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
				routing: {
					request: {
						qs: {
							status: '={{$parameter["status"]}}',
						},
					},
				},
			},
			// Sales ID for Get by ID and Delete operations
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
			},
			// Sales Body Fields for Create and Update
			{
				displayName: 'Cliente ID',
				name: 'clienteId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['sales'],
						operation: ['create-sales', 'update-sales'],
					},
				},
				default: '',
				description: 'ID do cliente',
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
		],
	};
}
