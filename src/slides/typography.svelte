<script lang="ts">
	import { Slide, Step } from '@components'
	import { fly } from 'svelte/transition'

	let step: 'start' | 'title' | 'families' | 'fonts' | 'grid' = 'start'
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step on:in={() => (step = 'families')} />
	<Step on:in={() => (step = 'fonts')} />
	<Step on:in={() => (step = 'grid')} />

	<div class="h-full grid place-content-center text-white">
		{#if step === 'title'}
			<div>
				<p class="text-6xl">Typography</p>
			</div>
		{/if}

		{#if step === 'families'}
			<div>
				<div class="relative w-max mx-auto">
					<p class="text-9xl font-serif">serif</p>
					<div
						class="absolute top-[78px] left-[-6px] aspect-square w-[40px] border-4 border-red-400 rounded-full"
					/>
					<div
						class="absolute top-[28px] left-[128px] aspect-square w-[40px] border-4 border-red-400 rounded-full"
					/>
					<div
						class="absolute top-[-10px] left-[270px] aspect-square w-[40px] border-4 border-red-400 rounded-full"
					/>
				</div>
				<p class="text-9xl font-sans">sans-serif</p>
				<p class="text-9xl font-mono">monospaced</p>
			</div>
		{/if}

		{#if step === 'fonts'}
			<div class="space-y-16">
				{#each ['Inter', 'Manrope', 'Montserrat', 'Poppins'] as font, i}
					<div
						in:fly|global={{ y: 400, duration: 1000, delay: i * 300 }}
						class="px-4 pb-12 text-left border-b border-[#909bb4]"
					>
						<p class="text-3xl font-sans">{font}</p>
						<p class="mt-8 text-6xl font-semibold" style:font-family={font}>
							The quick brown fox jumps over the lazy dog
						</p>
					</div>
				{/each}
			</div>
		{/if}

		{#if step === 'grid'}
			<div>
				<p class="text-4xl" style:translate="0px -300px">8pt grid</p>

				<div class="relative flex items-end gap-[8px] scale-[8] bg-gray-700">
					<div class="absolute left-0 top-0 inset-0">
						{#each { length: 21 } as _, colsIndex}
							<div
								class="absolute w-[1px] h-full bg-[#1b1e27]"
								style:left="{(colsIndex + 1) * 8}px"
							/>
						{/each}

						{#each { length: 7 } as _, rowsIndex}
							<div
								class="absolute w-full h-[1px] bg-[#1b1e27]"
								style:top="{(rowsIndex + 1) * 8}px"
							/>
						{/each}
					</div>

					{#each [8, 16, 24, 32, 64] as value}
						<div
							class="grid place-content-center bg-gray-500"
							style:width="{value}px"
							style:height="{value}px"
						>
							<p
								class="mt-[2px] text-white z-10"
								style:font-size="{value * 0.3}px"
							>
								{value}px
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</Slide>
