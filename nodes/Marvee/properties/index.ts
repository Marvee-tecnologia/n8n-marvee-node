import { commonProperties } from './common.properties';
import { salesProperties } from './sales';
import { statementProperties } from './statement';

export const allMarveeProperties = [
	...commonProperties,
	...salesProperties,
	...statementProperties,
];
