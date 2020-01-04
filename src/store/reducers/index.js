import { combineReducers } from 'redux'
import { OPEN, CLOSE } from '../constants'
import { SLIDE_STYLES, CAROUSEL_STYLES, HEADER_STYLES, FOOTER_STYLES, COLUMN_STYLES } from '../constants/styles'
import { ALL_MARKDOWN } from '../constants/markdown'
import { PHOTOS } from '../constants/data'

export const photos = (state = PHOTOS) => state
export const markdown = (state = ALL_MARKDOWN) => state
export const carouselStyles = (state = CAROUSEL_STYLES) => state
export const slideStyles = (state = SLIDE_STYLES) => state
export const headerStyles = (state = HEADER_STYLES) => state
export const columnStyles = (state = COLUMN_STYLES) => state
export const footerStyles = (state = FOOTER_STYLES) => state

let initialState = false 

export function isOpen(state = initialState, action) {
	switch (action.type) {
		case OPEN:
			state = true
			return state
		case CLOSE:
			state = false
			return state
		default:
			return state
	}
}


export const rootReducer = combineReducers({
	photos,
	markdown,
	isOpen,
	carouselStyles,
	headerStyles,
	columnStyles,
	footerStyles,
	slideStyles
})
