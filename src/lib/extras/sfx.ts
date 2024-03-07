type Options = {
	vol?: number
	duration?: number
}

export function sfx(sound: string, defaults: Options = {}) {
	const audio = new Audio(`${sound}.mp3`)

	function play(opts: Options = {}) {
		const { vol = 0.5, duration = 1000 } = { ...defaults, ...opts }

		audio.pause()
		audio.currentTime = 0
		audio.volume = vol
		audio.play()

		setTimeout(() => {
			audio.pause()
			audio.currentTime = 0
		}, duration)
	}

	return { play }
}

// export function sfx(sound: string, { volume = 0.5, duration = 1000 } = {}) {
// 	return new Promise((resolve, reject) => {
// 		const audio = new Audio(`${sound}.mp3`)
// 		audio.volume = volume
// 		audio.onended = resolve
// 		audio.onerror = reject
// 		audio.play()

// 		setTimeout(() => {
// 			audio.pause()
// 			audio.currentTime = 0
// 			resolve('finished')
// 		}, duration)
// 	})
// }
