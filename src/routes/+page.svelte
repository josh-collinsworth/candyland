<script>
	import Card from '$lib/components/Card.svelte'
	import { state } from '$lib/state.svelte'
</script>

<div class="container">
	<div class="deck">
		{#each state.getFullDeck as card, idx (card.id)}
			<Card color={card.color} type={card.type} flipped={!!card.flipped} {idx} />
		{/each}
	</div>
	<div class="discard">
		<!-- Unused, just takes up grid space -->
	</div>
</div>

<div class="toolbar">
	<button onclick={state.shuffleRemainingCards}> Shuffle undrawn </button>
	<button onclick={state.reshuffleDeck}>Reshuffle entire deck</button>
</div>
