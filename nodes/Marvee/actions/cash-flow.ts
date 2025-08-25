import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetCashFlow(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);
	const year = this.getNodeParameter('year', 0) as number;

	try {
		const response = await apiClient.get(`/fluxo-de-caixa/${year}`);
		return this.helpers.returnJsonArray(response);
	} catch (error) {
		throw new NodeOperationError(
			this.getNode(),
			`Erro ao consultar fluxo de caixa: ${error.message}`,
		);
	}
}
