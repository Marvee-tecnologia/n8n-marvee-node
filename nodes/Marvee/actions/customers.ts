import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetCustomers(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	const cnpjcpf = this.getNodeParameter('cnpjcpf', 0, '') as string;
	const name = this.getNodeParameter('name', 0, '') as string;
	const fantasy_name = this.getNodeParameter('fantasy_name', 0, '') as string;
	const status = this.getNodeParameter('status', 0, 'active') as 'active' | 'inactive' | 'all';

	const queryParams: {
		cnpjcpf?: string;
		name?: string;
		fantasy_name?: string;
		status: 'active' | 'inactive' | 'all';
	} = {
		cnpjcpf: cnpjcpf || undefined,
		name: name || undefined,
		fantasy_name: fantasy_name || undefined,
		status: status,
	};

	try {
		const response = await apiClient.get('/clientes', queryParams);

		return this.helpers.returnJsonArray(response);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao consultar clientes: ${error.message}`);
	}
}
