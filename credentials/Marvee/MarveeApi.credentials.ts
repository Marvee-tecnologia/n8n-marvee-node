import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class MarveeApi implements ICredentialType {
	name = 'marveeApi';
	displayName = 'Marvee API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl =
		'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
			headers: {
				clientId: '{{$credentials.clientId}}',
				clientSecret: '{{$credentials.clientSecret}}',
			},
		},
	};
}
