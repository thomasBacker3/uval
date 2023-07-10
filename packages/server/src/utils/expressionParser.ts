import expressionParser from 'docxtemplater/expressions.js'

// Make sure that if your input is undefined, your
// output will be undefined as well and will not
// throw an error

expressionParser.filters.upper = (input) => {
	if (!input) return input
	return input.toUpperCase()
}

expressionParser.filters.lower = (input) => {
	if (!input) return input
	return input.toLocaleLowerCase()
}
expressionParser.filters.firstLower = (input) => {
	if (!input) return input
	return input[0].toLowerCase() + input.slice(1)
}

export default expressionParser
