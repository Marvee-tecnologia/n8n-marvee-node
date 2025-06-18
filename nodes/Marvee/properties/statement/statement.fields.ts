import { INodeProperties } from 'n8n-workflow';
import { endOfMonthISO, startOfMonthISO } from '../../helpers/dateUtils';

export const statementFields: INodeProperties[] = [
	{
		displayName: 'Data Início *',
		name: 'startDate',
		type: 'dateTime',
		required: true,
		validateType: 'dateTime',
		displayOptions: {
			show: {
				resource: ['statement'],
				operation: ['get-statement'],
			},
		},
		placeholder: 'Selecione a data de início',
		default: startOfMonthISO(),
		description: 'Data de início para filtrar o extrato (obrigatório)',
	},
	{
		displayName: 'Data Fim *',
		name: 'endDate',
		type: 'dateTime',
		placeholder: 'Selecione a data de fim',
		required: true,
		validateType: 'dateTime',
		default: endOfMonthISO(),
		displayOptions: {
			show: {
				resource: ['statement'],
				operation: ['get-statement'],
			},
		},
		description: 'Data de fim para filtrar o extrato (obrigatório)',
	},
	{
		displayName: 'Filtrar Por Conta',
		name: 'conta',
		type: 'multiOptions',
		placeholder: 'Selecione uma ou mais contas',
		typeOptions: {
			loadOptionsMethod: 'getMarveeAccounts',
			loadOptionsDependsOn: ['resource', 'operation'],
			searchable: true,
		},
		displayOptions: {
			show: {
				resource: ['statement'],
				operation: ['get-statement'],
			},
		},
		default: [],
		description:
			'Conta para filtrar o extrato. Escolha da lista ou especifique um ID via <a href="https://docs.n8n.io/code/expressions/">expressão</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Filtrar Por Categoria',
		name: 'categoria',
		type: 'multiOptions',
		placeholder: 'Selecione uma ou mais categorias',
		typeOptions: {
			loadOptionsMethod: 'getMarveeCategories',
			loadOptionsDependsOn: ['resource', 'operation'],
			searchable: true,
		},
		displayOptions: {
			show: {
				resource: ['statement'],
				operation: ['get-statement'],
			},
		},
		default: [],
		description:
			'Categorias para filtrar o extrato (múltipla seleção). Escolha da lista ou especifique IDs via <a href="https://docs.n8n.io/code/expressions/">expressão</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Filtrar Por Status',
		name: 'statusExtrato',
		type: 'multiOptions',
		placeholder: 'Selecione um ou mais status',
		displayOptions: {
			show: {
				resource: ['statement'],
				operation: ['get-statement'],
			},
		},
		options: [
			{ name: 'Atrasado', value: 'atrasado' },
			{ name: 'Conciliado', value: 'conciliado' },
			{ name: 'Pendente', value: 'pendente' },
			{ name: 'Quitado', value: 'quitado' },
			{ name: 'Vence Hoje', value: 'vence_hoje' },
		],
		default: [],
		description: 'Status das transações para filtrar (múltipla seleção)',
	},
	{
		displayName: 'Página',
		name: 'page',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: ['statement'],
				operation: ['get-statement'],
			},
		},
		default: 1,
		description: 'Número da página para paginação (padrão: 1)',
	},
	{
		displayName: 'Tamanho Da Página',
		name: 'pageSize',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		displayOptions: {
			show: {
				resource: ['statement'],
				operation: ['get-statement'],
			},
		},
		default: 20,
		description: 'Número de registros por página (padrão: 50, máximo: 1000)',
	},
];
