import { createUpdateSalesFields } from './createUpdateSales.fields';
import { getSalesFields } from './getSales.fields';
import { salesOperations } from './sales.operations';
import { salesIdFields } from './salesId.fields';
import { storeSalesFields } from './storeSales.fields';

export const salesProperties = [
	...salesOperations,
	...getSalesFields,
	...salesIdFields,
	...createUpdateSalesFields,
	...storeSalesFields,
];
