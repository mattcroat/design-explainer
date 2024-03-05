<script lang="ts">
	export let markers: any[] = []
</script>

<div>
	<div class="background w-full h-full grid place-content-center">
		<div class="relative">
			{#each markers as marker}
				<div
					class="absolute bg-[yellow] mix-blend-multiply z-10"
					style:width="{marker.w}px"
					style:height="{marker.h}px"
					style:left="{marker.x}px"
					style:top="{marker.y}px"
				/>
			{/each}
			<slot />
		</div>
	</div>
</div>

<style>
	.background {
		background-image: url('paper.jpg');
		background-repeat: no-repeat;
		background-size: 200%;
		background-position: center;
		animation: position 1s infinite;
		animation-timing-function: step-end;
	}

	@keyframes position {
		0% {
			background-position: 25% 25%;
		}
		50% {
			background-position: 10% 10%;
		}
		100% {
			background-position: 50% 50%;
		}
	}
</style>
