import { INodeProperties } from 'n8n-workflow';

export const commonProperties: INodeProperties[] = [
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
		description: 'Recurso a ser acessado na API Marvee.',
	},
];
