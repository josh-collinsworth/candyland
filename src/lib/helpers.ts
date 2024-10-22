export const shuffle = <T>(array: T): T => {
	if (!Array.isArray(array)) return array
	let currentIndex = array.length,
		randomIndex

	// While there remain elements to shuffle.
	while (currentIndex > 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
	}

	return array
}

// https://stackoverflow.com/questions/30452263/is-there-a-mechanism-to-loop-x-times-in-es6-ecmascript-6-without-mutable-varia
export const times = (x: number) => (f: () => void) => {
	if (x > 0) {
		f()
		times(x - 1)(f)
	}
}

export const clamp = (value: number, min: number, max: number) => {
	return Math.min(max, Math.max(value, min))
}
