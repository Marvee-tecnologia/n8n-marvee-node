import { INodeProperties } from 'n8n-workflow';

export const updateSalesFields: INodeProperties[] = [
	{
		displayName: 'Sales ID',
		name: 'salesId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'ID da venda a ser atualizada',
	},
	{
		displayName: 'Document ID',
		name: 'document_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'ID do documento',
	},
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'ID da empresa',
	},
	{
		displayName: 'People ID',
		name: 'people_id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'ID da pessoa (cliente)',
	},
	{
		displayName: 'Category ID',
		name: 'category_id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'ID da categoria',
	},
	{
		displayName: 'Payment Method Type',
		name: 'payment_method_type',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		options: [
			{
				name: 'Cartão De Crédito',
				value: 'credit_card',
			},
			{
				name: 'Cartão De Débito',
				value: 'debit_card',
			},
			{
				name: 'Cheque',
				value: 'check',
			},
			{
				name: 'Dinheiro',
				value: 'money',
			},
			{
				name: 'PIX',
				value: 'pix',
			},
			{
				name: 'Transferência Bancária',
				value: 'bank_transfer',
			},
		],
		default: 'money',
		description: 'Tipo de método de pagamento',
	},
	{
		displayName: 'Account ID',
		name: 'account_id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'ID da conta',
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Comentário da venda',
	},
	{
		displayName: 'Additional Information',
		name: 'additional_information',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Informações adicionais',
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Código da venda',
	},
	{
		displayName: 'Generation Date',
		name: 'generation_date',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Data de geração',
	},
	{
		displayName: 'Situation',
		name: 'situation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		options: [
			{
				name: 'Pendente',
				value: 'pending',
			},
			{
				name: 'Aprovado',
				value: 'approved',
			},
			{
				name: 'Cancelado',
				value: 'cancelled',
			},
			{
				name: 'Processando',
				value: 'processing',
			},
		],
		default: 'pending',
		description: 'Situação do documento',
	},
	{
		displayName: 'Salesman',
		name: 'salesman',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Nome do vendedor',
	},
	{
		displayName: 'Original Value',
		name: 'original_value',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'Valor original',
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'Valor da venda',
	},
	{
		displayName: 'Discount Value',
		name: 'discount_value',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'Valor do desconto',
	},
	{
		displayName: 'Additional Value',
		name: 'additional_value',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'Valor adicional',
	},
	{
		displayName: 'Code Reference',
		name: 'code_reference',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Código de referência',
	},
	{
		displayName: 'Purchase Order',
		name: 'purchase_order',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Ordem de compra',
	},
	{
		displayName: 'Service Order',
		name: 'service_order',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Ordem de serviço',
	},
	{
		displayName: 'Charge Emission Day',
		name: 'charge_emission_day',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'Dia de emissão da cobrança',
	},
	{
		displayName: 'Charge Emission Type',
		name: 'charge_emission_type',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		options: [
			{
				name: 'Manual',
				value: 'manual',
			},
			{
				name: 'Automático',
				value: 'automatic',
			},
		],
		default: 'manual',
		description: 'Tipo de emissão da cobrança',
	},
	{
		displayName: 'Charge Emission Trigger',
		name: 'charge_emission_trigger',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		options: [
			{
				name: 'Imediato',
				value: 'immediate',
			},
			{
				name: 'Agendado',
				value: 'scheduled',
			},
			{
				name: 'Por Dias',
				value: 'days',
			},
		],
		default: 'immediate',
		description: 'Gatilho de emissão da cobrança',
	},
	{
		displayName: 'NF Emission Day',
		name: 'nf_emission_day',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: 0,
		description: 'Dia de emissão da nota fiscal',
	},
	{
		displayName: 'NF Emission Type',
		name: 'nf_emission_type',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		options: [
			{
				name: 'Manual',
				value: 'manual',
			},
			{
				name: 'Automático',
				value: 'automatic',
			},
		],
		default: 'manual',
		description: 'Tipo de emissão da nota fiscal',
	},
	{
		displayName: 'NF Emission Trigger',
		name: 'nf_emission_trigger',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		options: [
			{
				name: 'Imediato',
				value: 'immediate',
			},
			{
				name: 'Agendado',
				value: 'scheduled',
			},
			{
				name: 'Data Específica',
				value: 'scheduled_day',
			},
		],
		default: 'immediate',
		description: 'Gatilho de emissão da nota fiscal',
	},
	{
		displayName: 'Data Emissão',
		name: 'data_emissao',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		default: '',
		description: 'Data de emissão',
	},
	{
		displayName: 'NFSe Justificada',
		name: 'nfse_justificada',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
			},
		},
		options: [
			{
				name: 'Justificada',
				value: 'Justificada',
			},
			{
				name: 'Não Justificada',
				value: 'Nao Justificada',
			},
		],
		default: 'Nao Justificada',
		description: 'Status de justificativa da NFSe',
	},
	{
		displayName: 'NFSe Justificativa',
		name: 'nfse_justificativa',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sales'],
				operation: ['update-sales'],
				nfse_justificada: ['Justificada'],
			},
		},
		default: '',
		description: 'Justificativa da NFSe (obrigatório quando NFSe é justificada)',
	},
];
