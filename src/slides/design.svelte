<script lang="ts">
	import { Slide } from '@components'
	import { signal } from '@motion'
	import { scrambler } from '@extras'

	const posters = [
		{ src: 'poster-3.jpg', alt: 'Josef Müller-Brockmann (1959)' },
		{ src: 'poster-2.jpg', alt: 'Josef Müller-Brockmann (1955)' },
		{ src: 'poster.jpg', alt: 'Carlo Vivarelli (1958)' },
	]

	async function intro() {}

	async function outro() {}
</script>

<Slide on:in={intro} on:out={outro}>
	<div class="h-full grid place-content-center font-mono text-8xl">
		<div class="grid grid-cols-3 gap-12">
			{#each posters as { src, alt }}
				<div class="max-w-[600px] bg-white p-2 rounded shadow-md">
					<img class="block max-w-full h-full" {src} {alt} />
					<p class="text-xl mt-6">{alt}</p>
				</div>
			{/each}
		</div>
	</div>
</Slide>
