<script lang="ts">
	import { Slide } from '@components'
	import { signal } from '@motion'
	import { sfx } from '@lib/extras'

	const quote = signal({ opacity: 0, y: 1000 })
	const marker = signal({ w: 0, h: 100, x: 36, y: 28 })

	const markerSfx = sfx('marker')

	async function intro() {
		await quote.to({ opacity: 1, y: 0 })

		markerSfx.play({ duration: 700 })
		await marker.to({ w: 340, h: 100, x: 36, y: 28 }, { delay: 300 })
	}
</script>

<!-- <Slide on:in={intro}>
	<div class="relative h-full grid place-content-center text-8xl">
		<div
			class="absolute bg-[yellow] mix-blend-multiply z-10"
			style:width="{$marker.w}px"
			style:height="{$marker.h}px"
			style:left="{$marker.x}%"
			style:top="{$marker.y}%"
		/>

		<img
			class="block w-full h-full shadow-md rounded"
			alt="poster"
			src="utilitarian.png"
			style:opacity={$quote.opacity}
			style:translate="0px {$quote.y}px"
		/>
	</div>
</Slide> -->
