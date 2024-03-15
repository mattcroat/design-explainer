<script lang="ts">
	import { fly, slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { Slide, Step } from '@components'
	import { signal } from '@motion'

	let step: 'start' | 'title' | 'wireframe' = 'start'

	const wireframe = signal({ x: 5 })
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step on:in={async () => (step = 'wireframe')} />
	<Step
		on:in={async () => await wireframe.to({ x: -90 }, { duration: 2000 })}
	/>
	<Step
		on:in={async () => await wireframe.to({ x: -180 }, { duration: 2000 })}
	/>
	<Step
		on:in={async () => await wireframe.to({ x: -274 }, { duration: 2000 })}
	/>

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Layout</p>
			</div>
		</div>
	{/if}

	{#if step === 'wireframe'}
		<div
			transition:fly={{
				x: 400,
				duration: 1000,
				delay: 300,
				easing: cubicInOut,
			}}
			class="h-full flex gap-16"
			style:translate="{$wireframe.x}%"
		>
			{#each [1, 2, 3, 4] as image}
				<img src="layout-{image}.png" alt="layout" />
			{/each}
		</div>
	{/if}
</Slide>
