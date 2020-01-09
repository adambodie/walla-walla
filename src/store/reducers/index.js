import { combineReducers } from 'redux'
import { OPEN_CAROUSEL, CLOSE_CAROUSEL, OPEN_MODAL, CLOSE_MODAL } from '../constants'
import { SLIDE_STYLES, CAROUSEL_STYLES, HEADER_STYLES, FOOTER_STYLES, COLUMN_STYLES, CAROUSEL_TRANSITION_STYLES, DIALOG_STYLES } from '../constants/styles'
import { ALL_MARKDOWN } from '../constants/markdown'
import { PHOTOS } from '../constants/data'

export const photos = (state = PHOTOS) => state
export const markdown = (state = ALL_MARKDOWN) => state
export const carouselStyles = (state = CAROUSEL_STYLES) => state
export const carouselTransitionStyles = (state = CAROUSEL_TRANSITION_STYLES) => state
export const slideStyles = (state = SLIDE_STYLES) => state
export const dialogStyles = (state = DIALOG_STYLES) => state
export const headerStyles = (state = HEADER_STYLES) => state
export const columnStyles = (state = COLUMN_STYLES) => state
export const footerStyles = (state = FOOTER_STYLES) => state

let initialState = false 

export function isCarouselOpen(state = initialState, action) {
	switch (action.type) {
		case OPEN_CAROUSEL:
			state = true
			return state
		case CLOSE_CAROUSEL:
			state = false
			return state
		default:
			return state
	}
}

export let miniArticleState = {
	miniArticles: [
	{ title: 'The Anatomy of a 5 Minute Picture', image: 'whitman', alt: 'Marcus Whitman',isModalOpen: false},
	{ title: 'How far are you from Walla Walla?', image: 'marcus-whitman',alt: 'Marcus Whitman Conference Center', isModalOpen: false},
	{ title: 'Hot Poop!', image: 'hot-poop', alt: 'Hot Poop', isModalOpen: false}
]
}

export function isModalOpen(state = miniArticleState, action) {
	switch (action.type) {
		case OPEN_MODAL:
			state.miniArticles[action.payload.id].isModalOpen = true
			return Object.assign({}, state, {})
		case CLOSE_MODAL:
			state.miniArticles[action.payload.id].isModalOpen = false
			return Object.assign({}, state, {})
		default:
			return state
	}
}


export const rootReducer = combineReducers({
	photos,
	markdown,
	isCarouselOpen,
	isModalOpen,
	carouselStyles,
	carouselTransitionStyles,
	headerStyles,
	dialogStyles,
	columnStyles,
	footerStyles,
	slideStyles
})
