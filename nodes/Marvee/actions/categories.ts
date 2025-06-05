import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetCategories(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	// Obter parâmetros opcionais
	const limit = this.getNodeParameter('limit', 0, 50) as number;
	const offset = this.getNodeParameter('offset', 0, 0) as number;

	// Construir query parameters
	const queryParams: any = {};

	if (limit > 0) {
		queryParams.limit = limit;
	}

	if (offset > 0) {
		queryParams.offset = offset;
	}

	try {
		const response = await apiClient.get('/categorias', queryParams);

		return this.helpers.returnJsonArray(response);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao consultar categorias: ${error.message}`);
	}
}
