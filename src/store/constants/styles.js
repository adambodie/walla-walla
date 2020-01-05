import { makeStyles } from '@material-ui/core/styles'

export const SLIDE_STYLES = {
	root: {
		backgroundColor: 'gray',
		padding: 0,
	},
	media: {
		backgroundColor: 'black'
	},
	title: {
		marginBottom: 0,
	},
	mediaBackground: {
		height: 'calc(100% - 90px)'
	},
	text: {
		paddingTop: 12
	},
}

export const CAROUSEL_STYLES = {
	dots: {
		display: 'none'
	}	
}

export const HEADER_STYLES = makeStyles(theme => ({
	root: {
		width: '100%',
		background: '#EEEEEE'
	},	
	title: {
		flex: 1,
		padding: '20px',
		fontWeight: 'bold'
	}
}));

export const FOOTER_STYLES = makeStyles(theme => ({
	root: {
		width: '100%',
		background: '#EEEEEE'
	},	
	title: {
		flex: 1,
		padding: '10px',
	}
}));

export const COLUMN_STYLES = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginTop: '30px'
	},
	grid: {
		marginBottom: '30px',
		borderBottom: '1px solid white'
	},
	paper: {
		padding: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		textAlign: 'left',
		minHeight: '520px',
		opacity: 0.8,
		borderRadius: '5%',
		border: '1px solid black'
	},
	paperTop: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	img: {
		maxHeight: '400px'
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
	}
}))


export const CAROUSEL_TRANSITION_STYLES = makeStyles({
	view: {
		width: '100%',
		float: 'left',
		overflow: 'hidden',
		position: 'relative',
		cursor: 'default',
		'& h1': {
			textTransform: 'uppercase',
			position: 'relative',
			padding: '10px',
			color: 'white'
		},
		'& .mask': {
			width: '100%',
			position: 'absolute',
			overflow: 'hidden'
		}
	},
	viewTransition: {
		'& img': {
			transition: 'all 0.2s linear',
		},
		'&:hover img': { 
			transform: 'scale(1.1)'
		},
		'& .mask': {
			opacity: '0',
			transition: 'all 0.4s ease-in-out'
		},
		'& h1': {
			transform: 'translateY(-100px)',
			opacity: '0',
			transition: 'all 0.2s ease-in-out'
		},
		'&:hover .mask': { 
			opacity: '1'
		},
		'&:hover h1': {
			opacity: '1',
			transform: 'translateY(0px)'
		} 
	}
})
