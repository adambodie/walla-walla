import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Paper, Grid, Container, Typography } from '@material-ui/core'

const Article = ({classes, title, subtitle, markdown, image, height, alt}) => (
	<Container maxWidth="lg">
		<Grid container spacing={3} className={classes.grid}>
			<Grid item xs={12} md={7}>
				<Paper className={classes.paper}>
					<div className={classes.paperTop}>
						<Typography variant="h2" align="left"><strong>{title}</strong></Typography>
						<Typography  variant="h2" align="left" color="textSecondary">{subtitle}</Typography>
					</div>
					<ReactMarkdown source={markdown} />
				</Paper>
			</Grid>
			<Grid item xs={12} md={5}>
				<img style={{height: height}} src={`/img/${image}.jpg`} alt={alt}/>
			</Grid>
		</Grid>
	</Container>		
)

export default Article
