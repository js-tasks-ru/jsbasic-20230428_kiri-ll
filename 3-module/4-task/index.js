function showSalary(users, age) {

	let result = users.map((item) => (item.age <= age) ? `${item.name}, ${item.balance}` : undefined).filter((item) => !(item === undefined)).join('\n')

	if (result) return result;
}
