<svelte:head>
	<link rel="stylesheet" href="/app.css" />
</svelte:head>

<svelte:window
	on:beforeunload|preventDefault={() => confirm('Are you sure you want to lose your deck?')}
/>

<slot />
