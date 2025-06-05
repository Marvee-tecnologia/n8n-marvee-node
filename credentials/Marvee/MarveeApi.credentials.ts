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

	// Teste de credenciais usando ICredentialTestRequest para simplicidade e robustez
	// Esta abordagem é mais confiável durante desenvolvimento local com symlinks
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'http://localhost:3333/v1',
			url: '/health', // Endpoint simples para teste de conectividade
			method: 'GET',
			headers: {
				'client-id': '={{$credentials["client-id"]}}',
				authorization: '={{$credentials["authorization"]}}',
			},
		},
	};

	/*
	 * Alternativa: Teste mais complexo usando função async
	 * Descomente se precisar de lógica de validação mais avançada
	 *
	 * async test(this: ICredentialTestFunctions): Promise<boolean> {
	 * 	try {
	 * 		const credentials = await this.getCredentials();
	 * 		const response = await this.helpers.request({
	 * 			method: 'GET',
	 * 			url: 'http://localhost:3333/v1/health',
	 * 			headers: {
	 * 				'client-id': credentials['client-id'] as string,
	 * 				'authorization': credentials['authorization'] as string,
	 * 			},
	 * 			json: true,
	 * 		});
	 *
	 * 		// Validação adicional da resposta se necessário
	 * 		return response && response.status === 'ok';
	 * 	} catch (error: any) {
	 * 		throw new Error(`Falha na conexão com API Marvee: ${error.message}`);
	 * 	}
	 * }
	 */
}
