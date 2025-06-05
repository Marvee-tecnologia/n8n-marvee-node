import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
	NodeOperationError,
} from 'n8n-workflow';

// Union type para contextos que podem usar a API
type MarveeApiContext = IExecuteFunctions | ILoadOptionsFunctions;

/**
 * Cliente API reutilizável para interações com a API Marvee
 * Suporta tanto contexto de execução quanto de loadOptions
 */
export class MarveeApiClient {
	private baseUrl = 'http://localhost:3333/v1';
	private credentials: any;
	private context: MarveeApiContext;

	constructor(credentials: any, context: MarveeApiContext) {
		this.credentials = credentials;
		this.context = context;
	}

	/**
	 * Executa requisição GET
	 */
	async get(endpoint: string, params?: IDataObject): Promise<any> {
		return this.request('GET', endpoint, undefined, params);
	}

	/**
	 * Executa requisição POST
	 */
	async post(endpoint: string, body?: IDataObject, params?: IDataObject): Promise<any> {
		return this.request('POST', endpoint, body, params);
	}

	/**
	 * Executa requisição PUT
	 */
	async put(endpoint: string, body?: IDataObject, params?: IDataObject): Promise<any> {
		return this.request('PUT', endpoint, body, params);
	}

	/**
	 * Executa requisição DELETE
	 */
	async delete(endpoint: string, params?: IDataObject): Promise<any> {
		return this.request('DELETE', endpoint, undefined, params);
	}

	/**
	 * Método privado para executar requisições HTTP
	 */
	private async request(
		method: IHttpRequestMethods,
		endpoint: string,
		body?: IDataObject,
		params?: IDataObject,
	): Promise<any> {
		const url = `${this.baseUrl}${endpoint}`;

		const options: IRequestOptions = {
			method,
			url,
			headers: {
				'Content-Type': 'application/json',
				'client-id': this.credentials['client-id'] as string,
				authorization: this.credentials.authorization as string,
			},
			json: true,
		};

		if (body) {
			options.body = body;
		}

		if (params) {
			options.qs = params;
		}

		try {
			return await this.context.helpers.request(options);
		} catch (error: any) {
			throw new NodeOperationError(
				this.context.getNode(),
				`Erro na requisição ${method} ${endpoint}: ${error.message}`,
			);
		}
	}
}
