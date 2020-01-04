import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Paper, Grid, Container, Button, Typography, Avatar } from '@material-ui/core/'
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
			<Container maxWidth="lg">
				<Grid container spacing={3} className={classes.grid}>
					<Grid item xs={12} md={7}>
						<Paper className={classes.paper}>
						<div className={classes.paperTop}>
							<Typography variant="h2" align="left"><strong>Going Cluckers for Wingman Birdz n Brewz.</strong></Typography>
							<Typography  variant="h2" align="left" color="textSecondary">A restaurant review</Typography>
						</div>
							<ReactMarkdown source={props.markdown[3]} />
						</Paper>
					</Grid>
					<Grid item xs={12} md={5}>
						<img src='/img/wingman.jpg' alt='text'/>
					</Grid>
				</Grid>
			</Container>
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
			<Container maxWidth="lg">
				<Grid container spacing={3} className={classes.grid}>
					<Grid item xs={12} md={7}>
						<Paper className={classes.paper}>
						<div className={classes.paperTop}>
							<Typography variant="h2" align="left"><strong>Boardman, Oregon</strong></Typography>
							<Typography  variant="h2" align="left" color="textSecondary">Not a place to visit Twice</Typography>
						</div>
						<ReactMarkdown source={props.markdown[5]} />
						<p></p>
						</Paper>
					</Grid>
					<Grid item xs={12} md={5}>
						<img className={classes.img} src='/img/boardman3.jpg' alt='text'/>
					</Grid>
				</Grid>
			</Container>		
		</div>
  );
}

export default connect(mapStateToProps)(Columns)
