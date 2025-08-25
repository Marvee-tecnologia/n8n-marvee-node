import { accountsProperties } from './accounts';
import { cashFlowProperties } from './cash-flow';
import { categoriesProperties } from './categories';
import { commonProperties } from './common.properties';
import { customersProperties } from './customers';
import { statementProperties } from './statement';
import { yearsProperties } from './years';

export const allMarveeProperties = [
	...commonProperties,
	// ...salesProperties,
	...statementProperties,
	...customersProperties,
	...categoriesProperties,
	...accountsProperties,
	...cashFlowProperties,
	...yearsProperties,
];
