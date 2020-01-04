import React from 'react'
import ReactMarkdown from 'react-markdown'
import Article from './Article'
import { Paper, Grid, Container, Button, Typography, Avatar } from '@material-ui/core'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		markdown: state.markdown,
		columnStyles: state.columnStyles
		
	}
}

function Columns(props) {
	const classes = props.columnStyles()
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={3} className={classes.grid}>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>
						<div className={classes.paperTop}>
							<h2>The Anatomy of a 5 Minute Picture</h2>
							<Avatar src='/img/whitman.jpg' alt='Marcus Whitman Hotel' className={classes.large}/>
						</div>
						<ReactMarkdown source={props.markdown[0]} />
						<Button variant="contained" color="primary">Click to Enlarge</Button>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>
							<div className={classes.paperTop}>
								<h2>How far are you from Walla Walla?</h2>
								<Avatar src='/img/marcus-whitman.jpg' alt='Marcus Whitman' className={classes.large}/>
							</div>
							<ReactMarkdown source={props.markdown[1]} className={classes.list} />
							<Button variant="contained" color="primary">Click to Enlarge</Button>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>
							<div className={classes.paperTop}>
							<h2>Hot Poop!</h2>
							<Avatar src='/img/hot-poop.jpg' alt='Hot Poop' className={classes.large}/>
							</div>
							<ReactMarkdown source={props.markdown[2]} />
							<Button variant="contained" color="primary">Click to Enlarge</Button>
						</Paper>	
					</Grid>
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
			<Container maxWidth="lg">
				<Grid container spacing={3} className={classes.grid}>
					<Grid item xs={12} md={6}>
						<img src='/img/palouse.jpg' className={classes.img} alt='text'/>
					</Grid>
					<Grid item xs={12} md={6}>
						<Paper className={classes.paper}>
						<div className={classes.paperTop}>
							<Typography variant="h2" align="left"><strong>I Apologize for Nothing</strong></Typography>
							<Typography  variant="h4" align="left" color="textSecondary">Check out my blog on Palouse Falls: It will blow your mind.</Typography>
						</div>
						<ReactMarkdown source={props.markdown[4]} />
						</Paper>
					</Grid>
				</Grid>
			</Container>
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

export default connect(mapStateToProps)(Columns)
