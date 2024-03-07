<script lang="ts">
	import { Slide } from '@components'
	import { signal } from '@motion'
	import { sfx } from '@lib/extras'

	const poster = signal({ opacity: 0, y: 1000 })
	const marker1 = signal({ w: 0, h: 100, x: 36, y: 28 })
	const marker2 = signal({ w: 0, h: 100, x: 36, y: 47 })

	const markerSfx = sfx('marker')

	async function useMarker() {
		await poster.to({ opacity: 1, y: 0 })

		markerSfx.play({ duration: 700 })
		await marker1.to({ w: 340, h: 100, x: 36, y: 28 }, { delay: 300 })

		markerSfx.play({ duration: 700 })
		await marker2.to({ w: 440, h: 100, x: 36, y: 47 }, { delay: 300 })
	}
</script>

<Slide on:in={useMarker}>
	<div class="relative h-full grid place-content-center text-8xl">
		{#each [$marker1, $marker2] as marker}
			<div
				class="absolute bg-[yellow] mix-blend-multiply z-10"
				style:width="{marker.w}px"
				style:height="{marker.h}px"
				style:left="{marker.x}%"
				style:top="{marker.y}%"
				style:scale="1 1"
			/>
		{/each}

		<img
			class="block w-full h-full shadow-md rounded"
			alt="poster"
			src="design-is-not-art.jpg"
			style:opacity={$poster.opacity}
			style:translate="0px {$poster.y}px"
		/>
	</div>
</Slide>
