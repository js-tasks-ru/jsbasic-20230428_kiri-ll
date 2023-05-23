function getMinMax(str) {

	let makeArr, makeObj;

	makeArr = str.split(' ').map(item => Number(item)).filter((item) => isFinite(item)).sort((a, b) => a > b ? 1 : -1);

	return makeObj = {

		min: makeArr[0],
		max: makeArr[makeArr.length - 1],
	};
}
