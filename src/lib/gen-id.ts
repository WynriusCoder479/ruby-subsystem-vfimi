export const generateRandomSubString = (length: number): string => {
	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
	let result = ''
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return result
}

export const genUUID = (publisherCode: string, productCode: string) => {
	const prefix = publisherCode.split('RUBY')[1]
	const subPrefix = generateRandomSubString(6)
	const code = generateRandomSubString(12)

	const date = Date.now()

	return `${date}-${prefix}-${productCode}-${subPrefix}-${code}`
}
