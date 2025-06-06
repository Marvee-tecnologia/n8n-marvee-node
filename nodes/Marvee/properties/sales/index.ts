import { getSalesFields } from './getSales.fields';
import { salesOperations } from './sales.operations';
import { salesIdFields } from './salesId.fields';
import { storeSalesFields } from './storeSales.fields';
import { updateSalesFields } from './updateSales.fields';

export const salesProperties = [
	...salesOperations,
	...getSalesFields,
	...salesIdFields,
	...storeSalesFields,
	...updateSalesFields,
];
