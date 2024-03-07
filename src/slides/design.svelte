<script lang="ts">
	import { Slide, Step } from '@components'
	import { all, signal } from '@motion'
	import { scrambler, sfx } from '@extras'

	const poster1 = signal({ opacity: 0, x: 0, y: 1000 })
	const poster2 = signal({ opacity: 0, x: 0, y: 1000 })
	const poster3 = signal({ opacity: 0, x: 0, y: 1000 })

	const author1 = scrambler('Josef Müller-Brockmann (1959)')
	const author2 = scrambler('Josef Müller-Brockmann (1955)')
	const author3 = scrambler('Carlo Vivarelli (1958)')

	const counterSfx = sfx('counter', { vol: 0.04, duration: 2000 })

	$: posters = [
		{
			src: 'poster-1.jpg',
			author: $author1,
			style: $poster1,
		},
		{
			src: 'poster-2.jpg',
			author: $author2,
			style: $poster2,
		},
		{
			src: 'poster-3.jpg',
			author: $author3,
			style: $poster3,
		},
	]

	async function intro() {
		await poster1.to({ opacity: 1, y: 0 })
		counterSfx.play()
		await author1.scramble()

		await poster2.to({ opacity: 1, y: 0 })
		counterSfx.play()
		await author2.scramble()

		await poster3.to({ opacity: 1, y: 0 })
		counterSfx.play()
		await author3.scramble()
	}

	async function outro() {
		await all(
			poster1.to({ opacity: 0, x: -1000 }, { duration: 400 }),
			poster3.to({ opacity: 0, x: 1000 }, { duration: 400 }),
			poster2.to({ opacity: 0, y: 1000 }, { duration: 400 })
		)
		;[poster1, poster2, poster3].forEach((store) => store.reset())
	}
</script>

<Slide>
	<Step on:in={intro} />
	<Step on:in={outro} />

	<div class="h-full grid place-content-center text-8xl">
		<div class="grid grid-cols-3 gap-8">
			{#each posters as { src, author, style }}
				<div
					class="bg-white p-2 rounded shadow-md"
					style:opacity={style.opacity}
					style:translate="{style.x}px {style.y}px"
				>
					<img class="block w-full h-full" alt="poster" {src} />
					<p class="mt-8 font-mono text-2xl">{author}</p>
				</div>
			{/each}
		</div>
	</div>
</Slide>
