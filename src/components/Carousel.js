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

const StyledSlide = withStyles(styles)(Slide)

export default class Carousel extends Component {
	constructor(){
		super()
		this.state = { 
			open: false,
			data: [
				{'image': 'palouse', 'title': 'Palouse Falls', 'subtitle': 'Palouse Falls State Park, Washington'},
				{'image': 'upper-palouse', 'title': 'Upper Palouse Falls', 'subtitle': 'Palouse Falls State Park, Washington'},
				{'image': 'palouse-river', 'title': 'Palouse River', 'subtitle': 'Palouse Falls State Park, Washington'},
			]
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
		const { open, data } = this.state
		return (
			<div style={{ position: 'relative', width: '100%'}}>
				<Tooltip title="View Photos" placement="top">
					<Button style={{padding: '0'}} onClick={() => this.onStart()}>
						<img src='/img/walla-walla-banner.jpg' style={{width: '100%'}} alt='banner'/>
					</Button>
				</Tooltip>
				<AutoRotatingCarousel open={open} onClose={() => this.onClose()} onStart={() => this.onStart()} >
					{data.map((x, index) => (
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

