import React, { Component } from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { Button, Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		backgroundColor: 'gray',
		padding: 0
	},
	media: {
		backgroundColor: 'black'
	},
	title: {
		marginBottom: 0,
	},
	mediaBackground: {
		height: 'calc(100% - 90px)',
	},
	text: {
		paddingTop: 12
	}
}

const StyledSlide = withStyles(styles)(Slide);

export default class Carousel extends Component {
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
		return (
			<div style={{ position: 'relative', width: '100%', height: 700 }}>
			<Tooltip title="View Photos" placement="top">
				<Button style={{padding: '0'}} onClick={() => this.onStart()}>
					<img src='/img/walla-walla-banner.jpg' style={{width: '100%'}} alt='banner'/>
				</Button>
			</Tooltip>
				<AutoRotatingCarousel
					autoplay={false}
					open={open}
					onClose={() => this.onClose()}
					onStart={() => this.onStart()}
					style={{ position: 'absolute' }}
				>
					<StyledSlide
					  media={<img src='/img/palouse.jpg' alt='text' className='slide-image'/>}
					  title='Palouse Falls'
					  subtitle='Palouse Falls State Park, Washington'
					/>
					 <StyledSlide
					  media={<img src='/img/upper-palouse.jpg' alt='text' className='slide-image'/>}
					  title='Upper Palouse Falls'
					  subtitle='Palouse Falls State Park, Washington'
					/>
					 <StyledSlide
					  media={<img src='/img/palouse-river.jpg' alt='text' className='slide-image'/>}
					  title='Palouse River'
					  subtitle='Palouse Falls State Park, Washington'
					/>
				</AutoRotatingCarousel>
		</div>
	)
}}

