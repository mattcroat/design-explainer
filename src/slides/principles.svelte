<script lang="ts">
	import { Slide, Step } from '@components'
	import { all, signal } from '@motion'
	import { scrambler, sfx } from '@lib/extras'

	const viewBox = signal({ x: 0, y: 0, w: 960, h: 540 })
	const text = signal({
		contrast: 0,
		repetition: 0,
		alignment: 0,
		proximity: 0,
	})

	const contrast = scrambler('Contrast')
	const repetition = scrambler('Repetition')
	const alignment = scrambler('Alignment')
	const proximity = scrambler('Proximity')

	const transitionSfx = sfx('transition', { vol: 0.1 })

	async function intro() {
		await all(text.to({ contrast: 1 }), contrast.scramble())

		transitionSfx.play()
		await viewBox.to({ x: 960, y: 0, w: 960, h: 540 })
		await all(text.to({ repetition: 1 }), repetition.scramble())

		transitionSfx.play()
		await viewBox.to({ x: 0, y: 540, w: 960, h: 540 })
		await all(text.to({ alignment: 1 }), alignment.scramble())

		transitionSfx.play()
		await viewBox.to({ x: 960, y: 540, w: 960, h: 540 })
		await all(text.to({ proximity: 1 }), proximity.scramble())

		transitionSfx.play()
		await viewBox.to({ x: 0, y: 0, w: 1920, h: 1080 })
	}

	async function outro() {}
</script>

<Slide>
	<div class="absolute inset-0">
		<Step on:in={intro} />

		<svg viewBox="{$viewBox.x} {$viewBox.y} {$viewBox.w} {$viewBox.h}">
			<!-- <rect x="0" y="0" width="960" height="540" fill="none" /> -->
			<g>
				<g transform="translate(440 240)">
					<circle cx="80" cy="0" r="80" fill="yellow" />
					<circle
						cx="0"
						cy="0"
						r="80"
						fill="aqua"
						stroke="#1b1e27"
						stroke-width="4"
					/>
				</g>
				<text
					x="480"
					y="370"
					fill="#fff"
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-mono text-2xl"
					style:opacity={$text.contrast}
				>
					{$contrast}
				</text>
			</g>

			<!-- <rect x="960" y="0" width="960" height="540" fill="lightgreen" /> -->
			<g>
				<g transform="translate(1320 240)">
					{#each { length: 4 } as _, i}
						<circle
							cx={80 * i}
							cy="0"
							r="80"
							fill={i % 2 ? 'yellow' : 'aqua'}
							stroke="#1b1e27"
							stroke-width="4"
						/>
					{/each}
				</g>

				<text
					x="1440"
					y="370"
					fill="#fff"
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-mono text-2xl"
					style:opacity={$text.repetition}
				>
					{$repetition}
				</text>
			</g>

			<!-- <rect x="0" y="540" width="960" height="540" fill="lightyellow" /> -->
			<g>
				<g transform="translate(420 700)">
					<rect x="0" y="0" width="10" height="170" rx="2" fill="aqua" />

					<rect x="24" y="14" width="120" height="10" rx="2" fill="#fff" />
					<rect x="24" y="38" width="140" height="10" rx="2" fill="#fff" />
					<rect x="24" y="62" width="100" height="10" rx="2" fill="#fff" />

					<rect x="24" y="100" width="120" height="10" rx="2" fill="#fff" />
					<rect x="24" y="124" width="60" height="10" rx="2" fill="#fff" />
					<rect x="90" y="124" width="52" height="10" rx="2" fill="#fff" />
					<rect x="24" y="148" width="100" height="10" rx="2" fill="#fff" />
				</g>

				<text
					x="480"
					y="920"
					fill="#fff"
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-mono text-2xl"
					style:opacity={$text.alignment}
				>
					{$alignment}
				</text>
			</g>

			<!-- <rect x="960" y="540" width="960" height="540" fill="lightpink" /> -->
			<g>
				<g transform="translate(1310 660)">
					<circle cx="40" cy="40" r="40" fill="aqua" />
					<circle cx="130" cy="40" r="40" fill="aqua" />
					<circle cx="220" cy="40" r="40" fill="aqua" />

					<circle cx="40" cy="130" r="40" fill="aqua" />
					<circle cx="130" cy="130" r="40" fill="yellow" />
					<circle cx="220" cy="130" r="40" fill="aqua" />

					<circle cx="40" cy="220" r="40" fill="aqua" />
					<circle cx="130" cy="220" r="40" fill="aqua" />
					<circle cx="220" cy="220" r="40" fill="aqua" />
				</g>

				<text
					x="1440"
					y="960"
					fill="#fff"
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-mono text-2xl"
					style:opacity={$text.proximity}
				>
					{$proximity}
				</text>
			</g>
		</svg>
	</div>
</Slide>
