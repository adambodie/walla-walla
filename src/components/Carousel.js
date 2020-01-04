import React from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { Button, Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { openCarousel, closeCarousel } from '../store/actions'

const mapStateToProps = state => {
	return {
		photos: state.photos,
		carouselStyles: state.carouselStyles,
		slideStyles: state.slideStyles,
		isOpen: state.isOpen
	}
}
const mapDispatchToProps = { openCarousel, closeCarousel }

const Carousel = ({ isOpen, photos, carouselStyles, slideStyles, openCarousel, closeCarousel }) => {
	const StyledCarousel = withStyles(carouselStyles)(AutoRotatingCarousel)
	const StyledSlide = withStyles(slideStyles)(Slide)
	return (
		<div style={{ position: 'relative', width: '100%'}}>
			<Tooltip title="View Photos" placement="top">
				<Button style={{padding: '0'}} onClick={openCarousel}>
					<img src='/img/walla-walla-banner.jpg' style={{width: '100%'}} alt='banner'/>
				</Button>
			</Tooltip>
			<StyledCarousel open={isOpen} onClose={closeCarousel} onStart={openCarousel} >
				{photos.map((x, index) => (
					<StyledSlide
						key={index}
						media={<img src={`/img/${x.image}.jpg`} alt={x.title}/>}
						title={x.title}
						subtitle={x.subtitle}
					/>
				))}
			</StyledCarousel>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
