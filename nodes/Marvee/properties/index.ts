import { accountsProperties } from './accounts';
import { categoriesProperties } from './categories';
import { commonProperties } from './common.properties';
import { customersProperties } from './customers';
import { statementProperties } from './statement';

export const allMarveeProperties = [
	...commonProperties,
	// ...salesProperties,
	...statementProperties,
	...customersProperties,
	...categoriesProperties,
	...accountsProperties,
];
