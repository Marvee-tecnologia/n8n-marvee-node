import { DateTime } from 'luxon';
import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetStatement(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);
	const startDate = (this.getNodeParameter('startDate', 0) as DateTime).toUTC().toISO();
	const endDate = (this.getNodeParameter('endDate', 0) as DateTime).toUTC().toISO();
	if (!startDate || !endDate) {
		throw new NodeOperationError(this.getNode(), 'Data de início e fim são obrigatórios');
	}
	const conta = this.getNodeParameter('conta', 0, []) as string[];
	const categoria = this.getNodeParameter('categoria', 0, []) as string[];
	const statusExtrato = this.getNodeParameter('statusExtrato', 0, []) as string[];
	const page = this.getNodeParameter('page', 0, 1) as number;
	const pageSize = this.getNodeParameter('pageSize', 0, 50) as number;

	const queryParams: {
		startDate: string;
		endDate: string;
		conta_id?: string[];
		categorias?: string[];
		status?: string[];
		page?: number;
		pageSize?: number;
	} = {
		startDate,
		endDate,
	};

	if (conta.length > 0) {
		queryParams.conta_id = conta;
	}
	if (categoria.length > 0) {
		queryParams.categorias = categoria;
	}
	if (statusExtrato.length > 0) {
		queryParams.status = statusExtrato;
	}
	if (page > 0) {
		queryParams.page = page;
	}
	if (pageSize > 0) {
		queryParams.pageSize = pageSize;
	}

	try {
		const response = await apiClient.get('/extrato', queryParams);
		return this.helpers.returnJsonArray(response);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao consultar extrato: ${error.message}`);
	}
}
