import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class MarveeApi implements ICredentialType {
	name = 'marveeApi';
	displayName = 'Marvee API';
	documentationUrl =
		'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'client-id',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'authorization',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				['client-id']: '={{$credentials["client-id"]}}',
				['authorization']: '={{$credentials["authorization"]}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
		//	baseURL: 'https://api-prod-aws.marvee.com.br/v1',
		  baseURL: 'http://localhost:3333/v1', // Localhost
			url: '/health', // Endpoint simples para teste de conectividade
			method: 'GET',
			headers: {
				'client-id': '={{$credentials["client-id"]}}',
				authorization: '={{$credentials["authorization"]}}',
			},
		},
	};
}
