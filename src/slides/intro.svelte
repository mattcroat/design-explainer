<script lang="ts">
	import { Slide } from '@components'
	import { signal } from '@motion'
	import { scrambler, sfx } from '@extras'

	const text = signal({ opacity: 1, y: 0 })
	const marker1 = signal({ w: 0, x: 0 })
	const marker2 = signal({ w: 0, x: 0 })

	const visual = scrambler('visual')
	const design = scrambler('design')

	async function intro() {
		visual.scramble()
		design.scramble({ duration: 4000 })
		await text.to({ opacity: 1 })
		await marker1.to({ w: 400, x: 1 })
		await marker1.to({ x: 0 })
		await marker2.to({ w: 400, x: 1 })
		await marker2.to({ x: 0 })
	}

	async function outro() {
		await text.to({ y: 1000 })
		;[text, marker1, marker2].forEach((store) => store.reset())
	}
</script>

<Slide on:in={intro} on:out={outro}>
	<div class="h-full relative grid place-content-center">
		<div
			class="absolute top-[44.4%] left-[27.5%] h-[120px] origin-right bg-[yellow] mix-blend-difference z-10"
			style:width="{$marker1.w}px"
			style:scale="{$marker1.x} 1"
		/>
		<div
			class="absolute top-[44.4%] left-[50%] h-[120px] origin-right bg-[yellow] mix-blend-difference z-10"
			style:width="{$marker2.w}px"
			style:scale="{$marker2.x} 1"
		/>
		<div
			class="flex gap-10 fancy text-8xl"
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
