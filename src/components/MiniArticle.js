import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Paper, Grid, Button, Avatar } from '@material-ui/core'


export default class MiniArticle extends Component {
	render() {
		const { classes, title, markdown, image, alt } = this.props
		return (
			<Grid item xs={12} md={4}>
				<Paper className={classes.paper}>
			<div className={classes.paperTop}>
				<h2>{title}</h2>
				<Avatar src={`/img/${image}.jpg`} alt={alt} className={classes.large}/>
			</div>
			<ReactMarkdown source={markdown} />
			<Button variant="contained" color="primary">Click to Enlarge</Button>
		</Paper>
	</Grid>
	)
}}

