import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Paper, Grid, Container, Typography } from '@material-ui/core'

const Article = ({classes, title, subtitle, markdown, image, alt, direction}) => (
	<Container maxWidth="lg">
		<Grid container spacing={3} className={classes.grid} direction={direction}>
			<Grid item md={7}>
				<Paper className={classes.paper}>
					<div>
						<Typography variant="h2" align="left"><strong>{title}</strong></Typography>
						<Typography  variant="h3" align="left" color="textSecondary">{subtitle}</Typography>
					</div>
					<ReactMarkdown source={markdown} />
				</Paper>
			</Grid>
			<Grid item md={5}>
				<img style={{width: '100%'}} src={`/img/${image}.jpg`} alt={alt}/>
			</Grid>
		</Grid>
	</Container>		
)

export default Article
