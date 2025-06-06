import {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	NodeOperationError,
} from 'n8n-workflow';
import { handleGetAccounts } from './actions/accounts';
import { handleGetCategories } from './actions/categories';
import { handleGetCustomers } from './actions/customers';
import {
	handleDeleteSales,
	handleGetSales,
	handleGetSalesById,
	handleStoreSales,
	handleUpdateSales,
} from './actions/sales';
import { handleGetStatement } from './actions/statement';
import {
	getMarveeAccountsHelper,
	getMarveeCategoriesHelper,
	getMarveeCustomersHelper,
} from './helpers/loadOptionsHelpers';
import { allMarveeProperties } from './properties';

export class Marvee implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Marvee',
		name: 'marvee',
		icon: 'file:marvee.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Marvee API',
		defaults: {
			name: 'Marvee',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				required: true,
				name: 'marveeApi',
				testedBy: 'marveeApi',
			},
		],
		properties: allMarveeProperties,
	};

	public methods: INodeType['methods'] = {
		loadOptions: {
			async getMarveeCustomers(this: ILoadOptionsFunctions) {
				return getMarveeCustomersHelper(this);
			},
			async getMarveeAccounts(this: ILoadOptionsFunctions) {
				return getMarveeAccountsHelper(this);
			},
			async getMarveeCategories(this: ILoadOptionsFunctions) {
				return getMarveeCategoriesHelper(this);
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		let results: INodeExecutionData[] = [];

		try {
			switch (resource) {
				case 'statement':
					switch (operation) {
						case 'get-statement':
							results = await handleGetStatement.call(this);
							break;
						default:
							throw new NodeOperationError(
								this.getNode(),
								`Operação não suportada para Statement: ${operation}`,
							);
					}
					break;

				case 'sales':
					switch (operation) {
						case 'get-sales':
							results = await handleGetSales.call(this);
							break;
						case 'get-sales-by-id':
							results = await handleGetSalesById.call(this);
							break;
						case 'store-sales':
							results = await handleStoreSales.call(this);
							break;
						case 'update-sales':
							results = await handleUpdateSales.call(this);
							break;
						case 'delete-sales':
							results = await handleDeleteSales.call(this);
							break;
						default:
							throw new NodeOperationError(
								this.getNode(),
								`Operação não suportada para Sales: ${operation}`,
							);
					}
					break;

				case 'customers':
					switch (operation) {
						case 'get-customers':
							results = await handleGetCustomers.call(this);
							break;
						default:
							throw new NodeOperationError(
								this.getNode(),
								`Operação não suportada para Customers: ${operation}`,
							);
					}
					break;

				case 'categories':
					switch (operation) {
						case 'get-categories':
							results = await handleGetCategories.call(this);
							break;
						default:
							throw new NodeOperationError(
								this.getNode(),
								`Operação não suportada para Categories: ${operation}`,
							);
					}
					break;

				case 'accounts':
					switch (operation) {
						case 'get-accounts':
							results = await handleGetAccounts.call(this);
							break;
						default:
							throw new NodeOperationError(
								this.getNode(),
								`Operação não suportada para Accounts: ${operation}`,
							);
					}
					break;

				default:
					throw new NodeOperationError(this.getNode(), `Recurso não suportado: ${resource}`);
			}

			return [results];
		} catch (error) {
			if (error instanceof NodeOperationError) {
				throw error;
			}
			throw new NodeOperationError(
				this.getNode(),
				`Erro na execução do nó Marvee: ${error.message}`,
			);
		}
	}
}
