<script>
	import Card from '$lib/components/Card.svelte'
	import { fullDeck } from '$lib/state.svelte'
	import { send, receive } from '$lib/transition'
	import { flip } from 'svelte/animate'
	import { cubicInOut } from 'svelte/easing'

	const library = $derived(fullDeck.filter((card) => !card.flipped))
	const graveyard = $derived(fullDeck.filter((card) => card.flipped).reverse())
</script>

<div class="container">
	<div class="deck">
		{#each library as card (card.id)}
			<div
				in:receive={{ key: card.id }}
				out:send={{ key: card.id }}
				animate:flip={{ duration: 600, easing: cubicInOut, delay: 400 }}
			>
				<Card color={card.color} type={card.type} flipped={card.flipped} />
			</div>
		{/each}
	</div>
	<div class="discard">
		{#each graveyard as card (card.id)}
			<div
				in:receive={{ key: card.id }}
				out:send={{ key: card.id }}
				animate:flip={{ duration: 600, easing: cubicInOut, delay: 400 }}
			>
				<Card color={card.color} type={card.type} flipped={card.flipped} />
			</div>
		{/each}
	</div>
</div>
