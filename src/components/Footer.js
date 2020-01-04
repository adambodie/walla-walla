import React from 'react';
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		footerStyles: state.footerStyles
	}
}

function Footer(props) {
	const classes = props.footerStyles()
	return (
		<div className={classes.root}>
			<Typography component="h4" variant="h6" color="textPrimary" align="left" noWrap className={classes.title} >
				© {new Date().getFullYear()} Adam Bodie, Inc.
			</Typography>
		</div>
	)
}

export default connect(mapStateToProps)(Footer)
