<script lang="ts">
	import { Slide } from '@components'
	import { signal } from '@motion'
	import { scrambler, sfx } from '@extras'

	const text = signal({ opacity: 1, y: 0 })
	const visualMarker = signal({ w: 0, x: 0 })
	const designMarker = signal({ w: 0, x: 0 })

	const visual = scrambler('visual')
	const design = scrambler('design')

	async function intro() {
		visual.scramble()
		design.scramble({ duration: 4000 })
		await text.to({ opacity: 1 })
		await visualMarker.to({ w: 400, x: 1 })
		await visualMarker.to({ x: 0 })
		await designMarker.to({ w: 400, x: 1 })
		await designMarker.to({ x: 0 })
	}

	async function outro() {
		await text.to({ y: 1000 })
		;[text, visualMarker, designMarker].forEach((store) => store.reset())
	}
</script>

<Slide on:in={intro} on:out={outro}>
	<div class="h-full relative grid place-content-center text-8xl">
		<div
			class="absolute top-[44.4%] left-[27.5%] h-[100px] origin-right bg-[yellow] mix-blend-difference z-10"
			style:width="{$visualMarker.w}px"
			style:scale="{$visualMarker.x} 1"
		/>
		<div
			class="absolute top-[44.4%] left-[50%] h-[100px] origin-right bg-[yellow] mix-blend-difference z-10"
			style:width="{$designMarker.w}px"
			style:scale="{$designMarker.x} 1"
		/>
		<div
			class="flex gap-10 fancy"
			style:opacity={$text.opacity}
			style:translate="0px {$text.y}px"
		>
			<div class="flex">
				{#each $visual.split('') as letter}
					<span class="w-[60px]">{letter}</span>
				{/each}
			</div>

			<div class="flex">
				{#each $design.split('') as letter}
					<span class="w-[60px]">{letter}</span>
				{/each}
			</div>
		</div>
	</div>
</Slide>
