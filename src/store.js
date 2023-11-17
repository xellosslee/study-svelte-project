import { writable } from 'svelte/store'

// FIXME: used only inside Button page for color two buttons
export const theme = writable('light')

export const popup = writable({
	title: 'commonPopup',
	visible: 0,
})
