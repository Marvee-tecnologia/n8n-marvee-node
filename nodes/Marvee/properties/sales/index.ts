import { createUpdateSalesFields } from './createUpdateSales.fields';
import { getSalesFields } from './getSales.fields';
import { salesOperations } from './sales.operations';
import { salesIdFields } from './salesId.fields';

export const salesProperties = [
	...salesOperations,
	...getSalesFields,
	...salesIdFields,
	...createUpdateSalesFields,
];
