import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	// Obter parâmetros opcionais para filtros
	const startDate = this.getNodeParameter('startDate', 0, '') as string;
	const endDate = this.getNodeParameter('endDate', 0, '') as string;
	const clienteIdFilter = this.getNodeParameter('clienteIdFilter', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;

	// Construir query parameters
	const queryParams: any = {};

	if (startDate) {
		queryParams.data_inicio = startDate;
	}

	if (endDate) {
		queryParams.data_fim = endDate;
	}

	if (clienteIdFilter) {
		queryParams.cliente_id = clienteIdFilter;
	}

	if (status) {
		queryParams.status = status;
	}

	try {
		const response = await apiClient.get('/vendas', queryParams);
		return this.helpers.returnJsonArray(response);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao consultar vendas: ${error.message}`);
	}
}

export async function handleGetSalesById(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	const salesId = this.getNodeParameter('salesId', 0) as string;

	try {
		const response = await apiClient.get(`/vendas/${salesId}`);
		return this.helpers.returnJsonArray([response]);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao obter venda por ID: ${error.message}`);
	}
}

export async function handleCreateSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	// Obter parâmetros obrigatórios
	const clienteId = this.getNodeParameter('clienteId', 0) as string;
	const produtoId = this.getNodeParameter('produtoId', 0) as string;
	const quantidade = this.getNodeParameter('quantidade', 0) as number;
	const valorUnitario = this.getNodeParameter('valorUnitario', 0) as number;
	const dataVenda = this.getNodeParameter('dataVenda', 0) as string;
	const descricao = this.getNodeParameter('descricao', 0, '') as string;

	const body = {
		cliente_id: clienteId,
		produto_id: produtoId,
		quantidade,
		valor_unitario: valorUnitario,
		data_venda: dataVenda,
		descricao,
	};

	try {
		const response = await apiClient.post('/vendas', body);
		return this.helpers.returnJsonArray([response]);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao criar venda: ${error.message}`);
	}
}

export async function handleUpdateSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	// Obter ID da venda
	const salesId = this.getNodeParameter('salesId', 0) as string;

	// Obter parâmetros obrigatórios
	const clienteId = this.getNodeParameter('clienteId', 0) as string;
	const produtoId = this.getNodeParameter('produtoId', 0) as string;
	const quantidade = this.getNodeParameter('quantidade', 0) as number;
	const valorUnitario = this.getNodeParameter('valorUnitario', 0) as number;
	const dataVenda = this.getNodeParameter('dataVenda', 0) as string;
	const descricao = this.getNodeParameter('descricao', 0, '') as string;

	const body = {
		cliente_id: clienteId,
		produto_id: produtoId,
		quantidade,
		valor_unitario: valorUnitario,
		data_venda: dataVenda,
		descricao,
	};

	try {
		const response = await apiClient.put(`/vendas/${salesId}`, body);
		return this.helpers.returnJsonArray([response]);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao atualizar venda: ${error.message}`);
	}
}

export async function handleDeleteSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	const salesId = this.getNodeParameter('salesId', 0) as string;

	try {
		await apiClient.delete(`/vendas/${salesId}`);
		return this.helpers.returnJsonArray([
			{ success: true, message: 'Venda deletada com sucesso', id: salesId },
		]);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao deletar venda: ${error.message}`);
	}
}
