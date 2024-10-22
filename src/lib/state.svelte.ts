import { CHARACTERS, COLORS } from './constants'
import { shuffle, times } from './helpers'

interface Card {
	type: 'single' | 'double' | 'special'
	color: (typeof COLORS)[number] | (typeof CHARACTERS)[number]
	flipped?: boolean
	id: string
}

const startingDeck: Card[] = []

COLORS.forEach((color) => {
	times(8)(() => startingDeck.push({ type: 'single', color, id: crypto.randomUUID() }))
	times(2)(() => startingDeck.push({ type: 'double', color, id: crypto.randomUUID() }))
})

CHARACTERS.forEach((name) => {
	startingDeck.push({ type: 'special', color: name, id: crypto.randomUUID() })
})

export const fullDeck = $state<Card[]>(shuffle(startingDeck))
