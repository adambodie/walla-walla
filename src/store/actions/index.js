import { OPEN, CLOSE } from '../constants'

export function openCarousel(boolean) {
	return {
		type: OPEN,
		boolean
	}
}

export function closeCarousel(boolean) {
	return {
		type: CLOSE,
		boolean
	}
}
