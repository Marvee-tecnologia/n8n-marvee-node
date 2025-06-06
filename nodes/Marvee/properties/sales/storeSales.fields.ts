import { INodeProperties } from 'n8n-workflow';

export const storeSalesFields: INodeProperties[] = [
	// Data de Competência
	{
		displayName: 'Data De Competência',
		name: 'data_competencia',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: '',
		description: 'Data de competência da venda',
	},

	// Tipo do Tomador
	{
		displayName: 'Tipo do Tomador',
		name: 'tipo_tomador',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		options: [
			{
				name: 'Pessoa Física',
				value: 'PF',
				description: 'Tomador pessoa física nacional',
			},
			{
				name: 'Pessoa Física Exterior',
				value: 'PFE',
				description: 'Tomador pessoa física do exterior',
			},
			{
				name: 'Pessoa Jurídica',
				value: 'PJ',
				description: 'Tomador pessoa jurídica nacional',
			},
			{
				name: 'Pessoa Jurídica Exterior',
				value: 'PJE',
				description: 'Tomador pessoa jurídica do exterior',
			},
			{
				name: 'Sem Tomador',
				value: 'ST',
				description: 'Venda sem tomador específico',
			},
		],
		default: 'ST',
		description: 'Tipo do tomador do serviço',
	},

	// Tomador - CNPJ/CPF
	{
		displayName: 'CNPJ/CPF do Tomador',
		name: 'tomador_cnpj_cpf',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				tipo_tomador: ['PF', 'PJ', 'PFE', 'PJE'],
			},
		},
		default: '',
		description: 'CNPJ ou CPF do tomador (sem formatação)',
	},

	// Tomador PF - Dados Gerais
	{
		displayName: 'Razão Social/Nome',
		name: 'tomador_razao_social',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				tipo_tomador: ['PF', 'PFE', 'PJE'],
			},
		},
		default: '',
		description: 'Razão social ou nome do tomador (máximo 50 caracteres)',
		typeOptions: {
			maxlength: 50,
		},
	},

	{
		displayName: 'Email do Tomador',
		name: 'tomador_email',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				tipo_tomador: ['PF'],
			},
		},
		default: '',
		description: 'Email do tomador (opcional)',
	},

	{
		displayName: 'DDD do Tomador',
		name: 'tomador_ddd',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				tipo_tomador: ['PF'],
			},
		},
		default: '',
		description: 'DDD do telefone do tomador (opcional)',
	},

	{
		displayName: 'Telefone do Tomador',
		name: 'tomador_telefone',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				tipo_tomador: ['PF'],
			},
		},
		default: '',
		description: 'Telefone do tomador (apenas números, parênteses, traços e espaços)',
	},

	// Endereço do Tomador
	{
		displayName: 'CEP do Tomador',
		name: 'tomador_cep',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				tipo_tomador: ['PF'],
			},
		},
		default: '',
		description: 'CEP do endereço do tomador (opcional)',
	},

	{
		displayName: 'Número Do Endereço',
		name: 'tomador_numero',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				tipo_tomador: ['PF'],
			},
		},
		default: '',
		description: 'Número do endereço do tomador (opcional)',
	},

	{
		displayName: 'Complemento',
		name: 'tomador_complemento',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				tipo_tomador: ['PF'],
			},
		},
		default: '',
		description: 'Complemento do endereço do tomador (opcional)',
	},

	// Campos Opcionais da Venda
	{
		displayName: 'Forma De Cobrança',
		name: 'forma_cobranca',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		options: [
			{
				name: 'Boleto',
				value: 'boleto',
			},
			{
				name: 'Cartão De Crédito',
				value: 'cartao_credito',
			},
			{
				name: 'Cartão De Débito',
				value: 'cartao_debito',
			},
			{
				name: 'Débito Em Conta',
				value: 'debito_em_conta',
			},
			{
				name: 'Dinheiro',
				value: 'dinheiro',
			},
			{
				name: 'DOC',
				value: 'doc',
			},
			{
				name: 'Outros',
				value: 'outros',
			},
			{
				name: 'PIX',
				value: 'pix',
			},
			{
				name: 'TED',
				value: 'ted',
			},
		],
		default: 'boleto',
		description: 'Forma de cobrança da venda (opcional)',
	},

	{
		displayName: 'Código De Referência',
		name: 'codigo_referencia',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: '',
		description: 'Código de referência único da venda (opcional)',
	},

	{
		displayName: 'Ordem De Compra',
		name: 'ordem_compra',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: '',
		description: 'Número da ordem de compra (opcional)',
	},

	{
		displayName: 'Ordem De Serviço',
		name: 'ordem_servico',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: '',
		description: 'Número da ordem de serviço (opcional)',
	},

	{
		displayName: 'Vendedor',
		name: 'vendedor',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: '',
		description: 'Nome do vendedor (opcional)',
	},

	{
		displayName: 'Observações',
		name: 'observacoes',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: '',
		description: 'Observações gerais da venda (opcional)',
	},

	{
		displayName: 'Informações Adicionais NFSe',
		name: 'info_adicional_nfse',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: '',
		description: 'Informações adicionais para a NFSe (opcional)',
	},

	// Serviço
	{
		displayName: 'Descrição Do Serviço',
		name: 'servico_descricao',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: '',
		description: 'Descrição detalhada do serviço prestado',
	},

	{
		displayName: 'Quantidade',
		name: 'servico_quantidade',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: 1,
		description: 'Quantidade de serviços prestados',
		typeOptions: {
			minValue: 0.01,
		},
	},

	{
		displayName: 'Valor Unitário',
		name: 'servico_valor_unitario',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: 0,
		description: 'Valor unitário do serviço',
		typeOptions: {
			numberPrecision: 2,
			minValue: 0,
		},
	},

	{
		displayName: 'Valor De Desconto',
		name: 'servico_valor_desconto',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: 0,
		description: 'Valor do desconto aplicado',
		typeOptions: {
			numberPrecision: 2,
			minValue: 0,
		},
	},

	{
		displayName: 'Valor De Acréscimo',
		name: 'servico_valor_acrescimo',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: 0,
		description: 'Valor do acréscimo aplicado',
		typeOptions: {
			numberPrecision: 2,
			minValue: 0,
		},
	},

	// Financeiro - Parcelas
	{
		displayName: 'Parcelas',
		name: 'financeiro_parcelas',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: {
			parcela: [
				{
					valor: 0,
					vencimento: '',
				},
			],
		},
		description: 'Parcelas do financeiro (mín: 1, máx: 48)',
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Adicionar Parcela',
		},
		options: [
			{
				name: 'parcela',
				displayName: 'Parcela',
				values: [
					{
						displayName: 'Valor Da Parcela',
						name: 'valor',
						type: 'number',
						required: true,
						default: 0,
						typeOptions: {
							numberPrecision: 2,
							minValue: 0.01,
						},
					},
					{
						displayName: 'Data De Vencimento',
						name: 'vencimento',
						type: 'dateTime',
						required: true,
						default: '',
						description: 'Data de vencimento da parcela',
					},
				],
			},
		],
	},

	// Automação - Cobrança
	{
		displayName: 'Configurar Automação De Cobrança',
		name: 'usar_automacao_cobranca',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: false,
		description: 'Whether to configure charge automation (boletos)',
	},

	{
		displayName: 'Tipo De Emissão - Cobrança',
		name: 'automacao_cobranca_tipo_emissao',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				usar_automacao_cobranca: [true],
			},
		},
		options: [
			{
				name: 'Manual',
				value: 'manual',
				description: 'Emissão manual de boletos',
			},
			{
				name: 'Automática',
				value: 'automatic',
				description: 'Emissão automática de boletos',
			},
		],
		default: 'manual',
		description: 'Tipo de emissão dos boletos',
	},

	{
		displayName: 'Gatilho De Emissão - Cobrança',
		name: 'automacao_cobranca_gatilho_emissao',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				usar_automacao_cobranca: [true],
				automacao_cobranca_tipo_emissao: ['automatic'],
			},
		},
		options: [
			{
				name: 'Dias Antes Do Vencimento',
				value: 'days',
				description: 'X dias antes do vencimento',
			},
			{
				name: 'Dia Do Mês',
				value: 'day',
				description: 'Todo dia X do mês',
			},
			{
				name: 'Após Emissão Da NFSe',
				value: 'after_nfse_emission',
				description: 'Automaticamente após emissão da NFSe',
			},
		],
		default: 'days',
		description: 'Gatilho para emissão automática dos boletos',
	},

	{
		displayName: 'Dia Da Emissão - Cobrança',
		name: 'automacao_cobranca_dia_emissao',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				usar_automacao_cobranca: [true],
				automacao_cobranca_gatilho_emissao: ['days', 'day'],
			},
		},
		default: 1,
		description: 'Dia para emissão (1-365 para "days", 1-31 para "day")',
		typeOptions: {
			minValue: 1,
			maxValue: 365,
		},
	},

	// Automação - NFSe
	{
		displayName: 'Configurar Automação De NFSe',
		name: 'usar_automacao_nfse',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
			},
		},
		default: false,
		description: 'Whether to configure NFSe automation',
	},

	{
		displayName: 'Tipo De Emissão - NFSe',
		name: 'automacao_nfse_tipo_emissao',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				usar_automacao_nfse: [true],
			},
		},
		options: [
			{
				name: 'Manual',
				value: 'manual',
				description: 'Emissão manual de NFSe',
			},
			{
				name: 'Automática',
				value: 'automatic',
				description: 'Emissão automática de NFSe',
			},
		],
		default: 'manual',
		description: 'Tipo de emissão da NFSe',
	},

	{
		displayName: 'Gatilho De Emissão - NFSe',
		name: 'automacao_nfse_gatilho_emissao',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				usar_automacao_nfse: [true],
				automacao_nfse_tipo_emissao: ['automatic'],
			},
		},
		options: [
			{
				name: 'Quando Quitado',
				value: 'settled',
				description: 'Emitir NFSe quando o pagamento for quitado',
			},
			{
				name: 'Após Emissão Do Boleto',
				value: 'after_charge_emission',
				description: 'Emitir NFSe após emissão do boleto',
			},
			{
				name: 'Data Agendada',
				value: 'scheduled_day',
				description: 'Emitir NFSe em data específica',
			},
		],
		default: 'settled',
		description: 'Gatilho para emissão automática da NFSe',
	},

	{
		displayName: 'Data De Emissão - NFSe',
		name: 'automacao_nfse_data_emissao',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['store-sales'],
				usar_automacao_nfse: [true],
				automacao_nfse_gatilho_emissao: ['scheduled_day'],
			},
		},
		default: '',
		description: 'Data específica para emissão da NFSe (deve ser hoje ou no futuro)',
	},
];
