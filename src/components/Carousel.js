import React, { Component } from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { Button, Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		photos: state.photos,
		carouselStyles: state.carouselStyles
	}
}

class Carousel extends Component {
	constructor(){
		super()
		this.state = { 
			open: false
		}
		this.onStart = this.onStart.bind(this)
		this.onClose = this.onClose.bind(this)
	}
	
	onClose() {
		this.setState({ open: false })
	}
	
	onStart() {
		this.setState({ open: true })
	}
	
	render() {
		const { open } = this.state
		const { photos, carouselStyles } = this.props
		const StyledSlide = withStyles(carouselStyles)(Slide)
		return (
			<div style={{ position: 'relative', width: '100%'}}>
				<Tooltip title="View Photos" placement="top">
					<Button style={{padding: '0'}} onClick={() => this.onStart()}>
						<img src='/img/walla-walla-banner.jpg' style={{width: '100%'}} alt='banner'/>
					</Button>
				</Tooltip>
				<AutoRotatingCarousel open={open} onClose={() => this.onClose()} onStart={() => this.onStart()} >
					{photos.map((x, index) => (
						<StyledSlide
							key={index}
							media={<img src={`/img/${x.image}.jpg`} alt={x.title}/>}
							title={x.title}
							subtitle={x.subtitle}
						/>
						)
					)}
				</AutoRotatingCarousel>
			</div>
	)
}}

export default connect(mapStateToProps)(Carousel)
