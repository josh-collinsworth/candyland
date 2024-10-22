<script lang="ts">
	import { state } from '$lib/state.svelte'
	let {
		color,
		type,
		flipped,
		idx
	}: { color: string; type: string; flipped: boolean; idx: number } = $props()

	const flipTopCard = () => {
		if (!flipped) {
			const unflipped = state.getFullDeck.filter((card) => !card.flipped).length
			state.getFullDeck[unflipped - 1].flipped = true
		} else {
			const lastFlipped = state.getFullDeck.findIndex((card) => card.flipped)
			state.getFullDeck[lastFlipped].flipped = false
		}
	}
</script>

<button
	class:flipped
	class="card color-{color} type-{type}"
	onclick={flipTopCard}
	style="--idx: {idx};"
>
	<div class="card-front"></div>
	<div class="card-back">
		<div class="box"></div>
		{#if type === 'double'}
			<div class="box"></div>
		{/if}
	</div>
</button>
