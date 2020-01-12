import React from 'react'
import { DialogContent, Grid } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

const DialogDescription = ({ dialogClasses, image, alt, markdown }) => (
	<DialogContent className={dialogClasses.root}>
	<Grid container spacing={3}>
		<Grid item xs={12} md={6}>
			<img className={dialogClasses.image} src={`/img/${image}.jpg`} alt={alt} />
		</Grid>
		<Grid item xs={12} md={6}>
		<div className={dialogClasses.markdown}>
			<ReactMarkdown source={markdown} />
		</div>
		</Grid>
	</Grid>
	</DialogContent>
)

export default DialogDescription
