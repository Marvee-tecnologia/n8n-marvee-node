export function endOfMonthISO() {
	const now = new Date();
	const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
	return endOfMonth.toISOString();
}

export function startOfMonthISO() {
	const now = new Date();
	const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	return startOfMonth.toISOString();
}
