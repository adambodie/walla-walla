import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Paper, Grid, Button, Avatar, Dialog, DialogTitle, DialogContent, Icon } from '@material-ui/core'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../store/actions'
import CancelIcon from '@material-ui/icons/Cancel'

const mapStateToProps = state => {
	return {
		dialogStyles: state.dialogStyles
	}
}

const mapDispatchToProps = { openModal, closeModal }

function MiniArticle(props) {
	const { classes, title, markdown, image, alt, isModalOpen, openModal, closeModal, index } = props
	const dialogClasses = props.dialogStyles()
	return (
	<Grid item xs={12} md={4}>
		<Paper className={classes.paper}>
			<div className={classes.paperTop}>
				<h2>{title}</h2>
				<Avatar src={`/img/${image}.jpg`} alt={alt} className={classes.large}/>
			</div>
			<ReactMarkdown source={markdown} />
			<Button variant="contained" color="primary" onClick={()=>openModal(index)}>Click to Enlarge</Button>
		</Paper>
		<Dialog fullScreen open={isModalOpen} onClose={closeModal}>
			<div className={dialogClasses.title}>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
					<Button onClick={()=>closeModal(index)} color="primary">
						<Icon><CancelIcon/></Icon>
					</Button>
				</div>
				<DialogContent className={dialogClasses.root}>
					<img className={dialogClasses.image} src={`/img/${image}.jpg`} alt={alt} />
				</DialogContent>
			</Dialog>
	</Grid>
)}

export default connect(mapStateToProps, mapDispatchToProps)(MiniArticle)
