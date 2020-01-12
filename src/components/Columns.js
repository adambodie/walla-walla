import React from 'react'
import Article from './Article'
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
					{props.isModalOpen.articles.map((x, index) => (
						<Article
							key={index}
							classes={classes} 
							title={x.title}
							subtitle={x.subtitle}
							markdown={props.markdown[index]} 
							image={x.image}
							alt={x.alt}
							isModalOpen={x.isModalOpen}
							index={index}
					/>					
					))}
				</Grid>
			</Container>
		</div>
  );
}

export default connect(mapStateToProps)(Columns)
