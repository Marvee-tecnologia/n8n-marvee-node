import { ILoadOptionsFunctions, INodePropertyOptions, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from './apiUtils';

/**
 * Helpers dedicados para loadOptions - seguindo padrão de modularização avançada
 * Separados dos apiHelpers gerais para melhor organização
 */

/**
 * Obtém lista de clientes da API Marvee para uso em dropdowns
 * @param context Contexto do n8n com ILoadOptionsFunctions
 * @returns Array de opções para dropdown
 */
export async function getMarveeCustomersHelper(
	context: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	try {
		const credentials = await context.getCredentials('marveeApi');
		const apiClient = new MarveeApiClient(credentials, context);

		const customers = await apiClient.get('/clientes');

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
export async function getMarveeAccountsHelper(
	context: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	try {
		const credentials = await context.getCredentials('marveeApi');
		const apiClient = new MarveeApiClient(credentials, context);

		const accounts = await apiClient.get('/contas');

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
export async function getMarveeCategoriesHelper(
	context: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	try {
		const credentials = await context.getCredentials('marveeApi');
		const apiClient = new MarveeApiClient(credentials, context);

		const categories = await apiClient.get('/categorias');

		// Filtra apenas categorias de nível 3
		return categories
			.filter((category: any) => category.level === 3)
			.map((category: any) => ({
				name: `${category.category} - ${category.description}`,
				value: category.id.toString(),
			}));
	} catch (error) {
		throw new NodeOperationError(
			context.getNode(),
			`Erro ao carregar categorias: ${error.message}`,
		);
	}
}
