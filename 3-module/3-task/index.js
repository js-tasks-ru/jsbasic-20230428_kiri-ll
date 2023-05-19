function camelize(str) {

	let arrStr = str.split('');

	let index = arrStr.indexOf('-');

	while (index !== -1) {

		let upper = arrStr[index + 1].toUpperCase();

		arrStr.splice(index, 2, upper);

		index = arrStr.indexOf('-');

	};

	return arrStr.join('');
}
