
exports.min = function min(array) {
	if (!array || !array.length) {
		return 0;
	}
	
	return array.sort((a, b) => {
		return a - b;
	})[0]
}

exports.max = function max(array) {
	if (!array || !array.length) {
		return 0;
	}
	
	return array.sort((a, b) => {
		return a - b;
	})[array.length - 1]
}

exports.avg = function avg(array) {
	if (!array || !array.length) {
		return 0;
	}

	let sortedArr = array.sort((a, b) => {
		return a - b;
	})

	return sortedArr.reduce((a, b) => {
		return a + b;
	}) / sortedArr.length
}
