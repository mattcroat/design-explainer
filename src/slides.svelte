<script lang="ts">
	import { Presentation, Slide } from '@components'
	import { options } from '@layout'

	import Intro from './slides/intro.svelte'
	import Design from './slides/design.svelte'
	import Art from './slides/art.svelte'
	import Utilitarian from './slides/utilitarian.svelte'

	$options = { outline: true }
</script>

<Presentation>
	<Slide />
	<Intro />
	<!-- <Design /> -->
	<!-- <Art /> -->
	<Utilitarian />
</Presentation>

<!-- <style>
	.code {
		padding: 1rem;
		background-color: var(--r-background-color);
		border-top: 1px solid hsl(226 19% 18%);
		border-left: 1px solid hsl(226 19% 18%);
		border-radius: 8px;
		box-shadow:
			1px 1px 20px hsla(226 19% 0% / 40%),
			1px 1px 40px hsla(226 19% 0% / 20%);
	}
</style> -->
