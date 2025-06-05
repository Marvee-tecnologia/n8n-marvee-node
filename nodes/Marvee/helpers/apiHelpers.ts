import { ILoadOptionsFunctions, INodePropertyOptions, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from './apiUtils';

/**
 * Obtém lista de clientes da API Marvee para uso em dropdowns
 * @param context Contexto do n8n com ILoadOptionsFunctions
 * @returns Array de opções para dropdown
 */
export async function getMarveeCustomers(
	context: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	try {
		const credentials = await context.getCredentials('marveeApi');
		const apiClient = new MarveeApiClient(credentials, context);

		const customers = await apiClient.get('/customers');

		return customers.map((customer: any) => ({
			name: customer.name,
			value: customer.id.toString(),
		}));
	} catch (error) {
		throw new NodeOperationError(context.getNode(), `Erro ao carregar clientes: ${error.message}`);
	}
}

/**
 * Obtém lista de contas da API Marvee para uso em dropdowns
 * @param context Contexto do n8n com ILoadOptionsFunctions
 * @returns Array de opções para dropdown
 */
export async function getMarveeAccounts(
	context: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	try {
		const credentials = await context.getCredentials('marveeApi');
		const apiClient = new MarveeApiClient(credentials, context);

		const accounts = await apiClient.get('/accounts');

		return accounts.map((account: any) => ({
			name: account.name,
			value: account.id.toString(),
		}));
	} catch (error) {
		throw new NodeOperationError(context.getNode(), `Erro ao carregar contas: ${error.message}`);
	}
}

/**
 * Obtém lista de categorias da API Marvee para uso em dropdowns
 * @param context Contexto do n8n com ILoadOptionsFunctions
 * @returns Array de opções para dropdown
 */
export async function getMarveeCategories(
	context: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	try {
		const credentials = await context.getCredentials('marveeApi');
		const apiClient = new MarveeApiClient(credentials, context);

		const categories = await apiClient.get('/categories');

		return categories.map((category: any) => ({
			name: category.name,
			value: category.id.toString(),
		}));
	} catch (error) {
		throw new NodeOperationError(
			context.getNode(),
			`Erro ao carregar categorias: ${error.message}`,
		);
	}
}
