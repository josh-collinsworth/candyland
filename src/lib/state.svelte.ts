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

export const state = $state({
	getFullDeck: shuffle(startingDeck),
	setFullDeck(deck: Card[]) {
		state.getFullDeck = deck
	},
	shuffleRemainingCards() {
		const confirmation = confirm(
			'Shuffle remaining undrawn cards? (Drawn cards will not be affected.)'
		)
		if (!confirmation) return
		const flipped = state.getFullDeck.filter((card) => card.flipped)
		const unflipped = [...state.getFullDeck].filter((card) => !card.flipped)
		const shuffledUnflipped = shuffle(unflipped)
		state.setFullDeck([...shuffledUnflipped, ...flipped])
	},
	reshuffleDeck() {
		const confirmation = confirm(
			'Are you sure you want to reshuffle the entire deck? All drawn cards will be shuffled in.'
		)
		if (!confirmation) return
		state.setFullDeck(shuffle(state.getFullDeck.map((card) => ({ ...card, flipped: false }))))
	}
})
