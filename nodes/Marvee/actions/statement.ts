import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetStatement(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	// Obter parâmetros obrigatórios
	const startDate = this.getNodeParameter('startDate', 0) as string;
	const endDate = this.getNodeParameter('endDate', 0) as string;

	// Obter parâmetros opcionais
	const conta = this.getNodeParameter('conta', 0, []) as string[];
	const categoria = this.getNodeParameter('categoria', 0, []) as string[];
	const statusExtrato = this.getNodeParameter('statusExtrato', 0, []) as string[];

	// Construir query parameters
	const queryParams: any = {
		data_inicio: startDate,
		data_fim: endDate,
	};

	if (conta.length > 0) {
		queryParams.conta_id = conta;
	}

	if (categoria.length > 0) {
		queryParams.categorias = categoria.join(',');
	}

	if (statusExtrato.length > 0) {
		queryParams.status = statusExtrato.join(',');
	}

	try {
		const response = await apiClient.get('/extrato', queryParams);

		return this.helpers.returnJsonArray(response);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao consultar extrato: ${error.message}`);
	}
}
