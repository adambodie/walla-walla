import React from 'react'
import DialogDescription from './DialogDescription'
import { Avatar, Paper, Grid, Button, Dialog, DialogTitle, Icon, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../store/actions'
import CancelIcon from '@material-ui/icons/Cancel'


const mapStateToProps = state => {
	return { dialogStyles: state.dialogStyles }
}

const mapDispatchToProps = { openModal, closeModal }

function Article(props) {
	const { classes, title, subtitle, markdown, image, alt, isModalOpen, openModal, closeModal, index } = props
	const dialogClasses = props.dialogStyles()
	return (
		<Grid item xs={12} md={4}>
			<Paper className={classes.paper}>
				<div className={classes.paperTop}>
					<Avatar src={`/img/${image}.jpg`} alt={alt} className={classes.large}/>	
					<Typography variant="h5" align="center" className={classes.title}><strong>{title}</strong></Typography>
					<Typography  variant="h6" align="center" color="textSecondary" className={classes.subtitle}>{subtitle}</Typography>
				</div>
				<Button variant="contained" color="primary" onClick={()=>openModal(index)}>Click to View</Button>
			</Paper>
			<Dialog fullScreen open={isModalOpen} onClose={closeModal}>
				<div className={dialogClasses.title}>
					<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
					<Button onClick={()=>closeModal(index)} color="primary">
						<Icon><CancelIcon/></Icon>
					</Button>
				</div>
				<DialogDescription dialogClasses={dialogClasses} image={image} alt={alt} markdown={markdown} />
			</Dialog>
		</Grid>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
