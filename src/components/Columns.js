import React from 'react'
import Article from './Article'
import MiniArticle from './MiniArticle'
import { Grid, Container } from '@material-ui/core'
import { connect } from 'react-redux'
import { openCarousel, closeCarousel } from '../store/actions'

const mapStateToProps = state => {
	return {
		markdown: state.markdown,
		columnStyles: state.columnStyles,
		isOpen: state.isOpen
	}
}
const mapDispatchToProps = { openCarousel, closeCarousel }

function Columns(props) {
	const classes = props.columnStyles()
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={3} className={classes.grid}>
				<MiniArticle 
					classes={classes} 
					title={'The Anatomy of a 5 Minute Picture'}
					markdown={props.markdown[0]} 
					image={'whitman'}
					alt={'Marcus Whitman'}
				/>
				<MiniArticle 
					classes={classes} 
					title={'How far are you from Walla Walla?'}
					markdown={props.markdown[1]} 
					image={'marcus-whitman'}
					alt={'Marcus Whitman Conference Center'} 
					/>
				<MiniArticle 
					classes={classes} 
					title={'Hot Poop!'}
					markdown={props.markdown[2]} 
					image={'hot-poop'}
					alt={'Hot Poop'} 
				/>
				</Grid>
			</Container>
			<Article 
				classes={classes} 
				title={'Going Cluckers for Wingman Birdz n Brewz.'} 
				subtitle={'A restaurant review'} 
				markdown={props.markdown[3]} 
				image={'wingman'}
				height={'600px'} 
				alt={'Wingman Birdz n Brewz'} 
			/>
			<Article 
				classes={classes} 
				title={'I Apologize for Nothing'} 
				subtitle={''} 
				markdown={props.markdown[4]} 
				image={'palouse'}
				height={'400px'} 
				alt={'Palouse Falls'} 
			/>
			<Article 
				classes={classes} 
				title={'Boardman, Oregon'} 
				subtitle={'Not a place to visit Twice'} 
				markdown={props.markdown[5]} 
				image={'boardman3'}
				height={'400px'} 
				alt={'Boardman'} 
			/>	
		</div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Columns)
