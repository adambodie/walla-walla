import React from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		headerStyles: state.headerStyles
	}
}

function Header(props) {
	const classes = props.headerStyles()
	return (
		<div className={classes.root}>
			<Typography component="h1" variant="h3" color="inherit" align="center" className={classes.title} >
				Adam's Wonderful Wild Weekend in Walla Walla Washington
			</Typography>
			<Typography component="p" color="inherit" className={classes.title}>
				With a full time job at Seterus and the ability to take PTO, I took my first day off on Friday March 18th. Looking for action, I headed east to Walla Walla, Washington. Here's my trip to Walla Walla...
			</Typography>
		</div>
	)
}

export default connect(mapStateToProps)(Header)
