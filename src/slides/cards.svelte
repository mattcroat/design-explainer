<script lang="ts">
	import { Slide, Step } from '@components'
	import { signal } from '@motion'
	import { scrambler } from '@extras'

	const cardA = signal({ opacity: 0, scale: 0 })
	const cardB = signal({ opacity: 0, scale: 0 })
	const cardC = signal({ opacity: 0, scale: 0 })

	let textA = scrambler('first')
	let textB = scrambler('second')
	let textC = scrambler('third')

	async function showCards() {
		textA.scramble()
		await cardA.to({ opacity: 1, scale: 1 }, { duration: 800 })
		textB.scramble()
		await cardB.to({ opacity: 1, scale: 1 }, { duration: 800 })
		textC.scramble()
		await cardC.to({ opacity: 1, scale: 1 }, { duration: 800 })
	}
</script>

<Slide animate>
	<Step on:in={showCards} />

	<p class="font-bold text-6xl mt-8">🪄 Animotion</p>

	<div class="w-max flex gap-8 mt-16 mx-auto">
		<div style:opacity={$cardA.opacity}>
			<div
				class="card shadow w-[400px] h-[400px] bg-gray-700 grid place-items-center rounded"
				style:scale={$cardA.scale}
			/>
			<p class="mt-12 text-3xl">{$textA}</p>
		</div>

		<div style:opacity={$cardB.opacity}>
			<div
				class="card shadow w-[400px] h-[400px] bg-gray-700 grid place-items-center rounded"
				style:scale={$cardB.scale}
			/>
			<p class="mt-12 text-3xl">{$textB}</p>
		</div>

		<div style:opacity={$cardC.opacity}>
			<div
				class="card shadow w-[400px] h-[400px] bg-gray-700 grid place-items-center rounded"
				style:scale={$cardC.scale}
			/>
			<p class="mt-12 text-3xl">{$textC}</p>
		</div>
	</div>
</Slide>

<style>
	.card + p {
		font-family: 'MonaSpace Neon';
	}

	.shadow {
		box-shadow:
			1px 1px 20px hsla(226 19% 0% / 20%),
			1px 1px 40px hsla(226 19% 0% / 10%);
	}
</style>
