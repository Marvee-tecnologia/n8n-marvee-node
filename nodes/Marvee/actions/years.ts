import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetYears(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);
	const queryParams: any = {};

	try {
		const response = await apiClient.get('/anos', queryParams);
		return this.helpers.returnJsonArray(response);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao consultar anos: ${error.message}`);
	}
}
