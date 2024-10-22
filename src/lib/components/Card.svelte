<script lang="ts">
	import { fullDeck } from '$lib/state.svelte'
	let { color, type, flipped } = $props()

	const flipTopCard = () => {
		const unflipped = fullDeck.filter((card) => !card.flipped).length
		fullDeck[unflipped - 1].flipped = true
	}
</script>

<button class:flipped class="card color-{color} type-{type}" onclick={flipTopCard}>
	<div class="card-front"></div>
	<div class="card-back">
		<div class="box"></div>
		{#if type === 'double'}
			<div class="box"></div>
		{/if}
	</div>
</button>
