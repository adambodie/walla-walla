import { OPEN_CAROUSEL, CLOSE_CAROUSEL, OPEN_MODAL, CLOSE_MODAL } from '../constants'

export function openCarousel(boolean) {
	return {
		type: OPEN_CAROUSEL,
		boolean
	}
}

export function closeCarousel(boolean) {
	return {
		type: CLOSE_CAROUSEL,
		boolean
	}
}

export function openModal(id) {
	return {
		type: OPEN_MODAL,
		payload: { id }
	}
}

export function closeModal(id) {
	return {
		type: CLOSE_MODAL,
		payload: { id }
	}
}
