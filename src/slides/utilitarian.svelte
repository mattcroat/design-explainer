<script lang="ts">
	import { Slide, Step } from '@components'
	import { signal } from '@motion'
	import { Marker, Position, scrambler, sfx } from '@lib/extras'

	const image = signal({ opacity: 0, x: 50, y: 100 })
	const text = scrambler('The Joy of Painting (1983)')

	const poster = signal({ opacity: 0, x: 50, y: 100 })
	const marker = signal({ opacity: 0, x: 22, y: 51, w: 0, h: 40 })

	const markerSfx = sfx('marker')
	const scrambleSfx = sfx('counter')

	async function intro() {
		await image.to({ opacity: 1, y: 50 })
		scrambleSfx.play({ vol: 0.04, duration: 2000 })
		await text.scramble()
		await image.to({ opacity: 0, y: 100 }, { delay: 4000 })

		await poster.to({ opacity: 1, y: 50 })
		markerSfx.play()
		await marker.to({ opacity: 1, w: 950 })
	}

	async function outro() {
		await marker.to({ opacity: 0 }, { duration: 0 })
		await poster.to({ opacity: 0, y: 200 })
	}
</script>

<Slide>
	<div class="relative h-full w-full">
		<Step on:in={intro} />
		<Step on:in={outro} />

		<Marker markers={[$marker]} />

		<Position props={image}>
			<img
				class="w-[800px] block rounded-2xl shadow-lg"
				src="bob-ross.gif"
				alt="joy of painting"
			/>
			<p class="mt-8 font-mono text-2xl">{$text}</p>
		</Position>

		<Position props={poster}>
			<div class=" w-[1200px] rounded shadow-md overflow-hidden">
				<img class="w-full" src="utilitarian.png" alt="poster" />
			</div>
		</Position>
	</div>
</Slide>
