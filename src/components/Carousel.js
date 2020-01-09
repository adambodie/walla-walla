import React from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { openCarousel, closeCarousel } from '../store/actions'

const mapStateToProps = state => {
	return {
		photos: state.photos,
		carouselStyles: state.carouselStyles,
		carouselTransitionStyles: state.carouselTransitionStyles,
		slideStyles: state.slideStyles,
		isCarouselOpen: state.isCarouselOpen
	}
}
const mapDispatchToProps = { openCarousel, closeCarousel }


function Carousel(props) {
	const { isCarouselOpen, photos, carouselStyles, slideStyles, openCarousel, closeCarousel } = props
	const classes = props.carouselTransitionStyles()
	const StyledCarousel = withStyles(carouselStyles)(AutoRotatingCarousel)
	const StyledSlide = withStyles(slideStyles)(Slide)
	return (
	<div className={classes.view}>
		<div className={classes.viewTransition}>
				<Button style={{padding: '0'}} onClick={openCarousel}>
					<img src='/img/walla-walla-banner.jpg' style={{width: '100%'}} alt='banner'/>
					<div className='mask'>
						<h1>View Photo Gallery</h1>
					</div>
				</Button>
			<StyledCarousel open={isCarouselOpen} onClose={closeCarousel} onStart={openCarousel} >
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
	</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
