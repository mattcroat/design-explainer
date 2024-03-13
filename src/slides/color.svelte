<script lang="ts">
	import { fade, fly } from 'svelte/transition'
	import { quadInOut } from 'svelte/easing'
	import { Slide } from '@components'
	import { flip } from 'svelte/animate'

	let colors = ['#f1fffa', '#ccfccb', '#96e6b3', '#568259', '#464e47']
	let animate = false

	setTimeout(() => {
		animate = true

		setInterval(() => {
			colors = colors.sort(() => Math.random() - 0.5)
		}, 1000)
	}, 1000)
</script>

<Slide>
	{#if animate}
		<div class="h-full grid grid-cols-5 font-mono text-2xl text-black">
			{#each colors as color, i (color)}
				<div
					animate:flip={{ duration: 600, easing: quadInOut }}
					in:fly|global={{ y: 400, duration: 800, delay: i * 300 }}
					class="relative"
					style:background-color={color}
				>
					<span
						in:fade|global={{ delay: (i + 1) * 400 }}
						class="absolute bottom-[40px] left-1/2 -translate-x-1/2"
					>
						{color}
					</span>
				</div>
			{/each}
		</div>
	{/if}
</Slide>
