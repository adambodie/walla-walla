import React from 'react'
import Article from './Article'
import MiniArticle from './MiniArticle'
import { Grid, Container } from '@material-ui/core'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		markdown: state.markdown,
		columnStyles: state.columnStyles,
		isModalOpen: state.isModalOpen,
	}
}

function Columns(props) {
	const classes = props.columnStyles()
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={3} className={classes.grid}>
					{props.isModalOpen.miniArticles.map((x, index) => (
						<MiniArticle
							key={index}
							classes={classes} 
							title={x.title}
							markdown={props.markdown[index]} 
							image={x.image}
							alt={x.alt}
							isModalOpen={x.isModalOpen}
							index={index}
					/>					
					))}
				</Grid>
			</Container>
			<Article 
				classes={classes} 
				title={'Going Cluckers for Wingman Birdz n Brewz.'} 
				subtitle={'A restaurant review'} 
				markdown={props.markdown[3]} 
				image={'wingman'}
				alt={'Wingman Birdz n Brewz'}
				direction={'row'} 
			/>
			<Article 
				classes={classes} 
				title={'I Apologize for Nothing'} 
				subtitle={'Get the Lowdown on the Palouse'} 
				markdown={props.markdown[4]} 
				image={'palouse'}
				alt={'Palouse Falls'}
				direction={'row-reverse'}
			/>
			<Article 
				classes={classes} 
				title={'Boardman, Oregon'} 
				subtitle={'Not a place to visit Twice'} 
				markdown={props.markdown[5]} 
				image={'boardman3'}
				alt={'Boardman'}
				direction={'row'}
			/>	
		</div>
  );
}

export default connect(mapStateToProps)(Columns)
