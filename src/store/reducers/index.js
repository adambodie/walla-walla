import { combineReducers } from 'redux'
import { PHOTOS, CAROUSEL_STYLES } from '../constants'


export const photos = (state = PHOTOS) => state
export const carouselStyles = (state = CAROUSEL_STYLES) => state


export const rootReducer = combineReducers({
	photos,
	carouselStyles
})
