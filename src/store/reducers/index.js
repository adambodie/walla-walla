import { combineReducers } from 'redux'
import { PHOTOS, CAROUSEL_STYLES, HEADER_STYLES, FOOTER_STYLES, COLUMN_STYLES } from '../constants'
import { ALL_MARKDOWN } from '../constants/markdown'


export const photos = (state = PHOTOS) => state
export const markdown = (state = ALL_MARKDOWN) => state
export const carouselStyles = (state = CAROUSEL_STYLES) => state
export const headerStyles = (state = HEADER_STYLES) => state
export const columnStyles = (state = COLUMN_STYLES) => state
export const footerStyles = (state = FOOTER_STYLES) => state

export const rootReducer = combineReducers({
	photos,
	markdown,
	carouselStyles,
	headerStyles,
	columnStyles,
	footerStyles
})
