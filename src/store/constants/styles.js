import { makeStyles } from '@material-ui/core/styles'


export const DIALOG_STYLES = makeStyles(theme =>({
	root: {
		background: 'url(/background.jpg) no-repeat center fixed',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
	},
	image: {
		maxHeight: '450px',
		[theme.breakpoints.down('sm')]: {
			maxHeight: '300px',
		},
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	markdown: {
		color: 'white',
		padding: '20px'
	}
}))

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
		height: 'calc(100% - 80px)'
	},
	text: {
		paddingTop: 12
	},
}

export const CAROUSEL_STYLES = (theme =>({
	dots: {
		display: 'none'
	},
	content: {
		width: '95%',
		maxHeight: '95%',
		display: 'block',
		margin: '0 auto',
		marginTop: '1%'

	}	
}))

export const HEADER_STYLES = makeStyles({
	root: {
		width: '100%',
		background: '#EEEEEE'
	},	
	title: {
		flex: 1,
		padding: '20px',
		fontWeight: 'bold'
	}
})

export const FOOTER_STYLES = makeStyles({
	root: {
		width: '100%',
		background: '#EEEEEE'
	},	
	title: {
		flex: 1,
		padding: '10px',
	}
});

export const COLUMN_STYLES = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginTop: '30px'
	},
	grid: {
		marginBottom: '30px',
		borderBottom: '1px solid white'
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
	},
	subtitle: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.25rem',
		},
	},
	paper: {
		padding: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		textAlign: 'left',
		minHeight: '470px',
		opacity: 0.8,
		borderRadius: '3%',
		border: '1px solid black',
		[theme.breakpoints.down('sm')]: {
			borderRadius: '1%',
		},
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
		width: theme.spacing(30),
		height: theme.spacing(30),
		boxShadow: '2px 2px 4px black',
		marginBottom: '10px'
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
