import { makeStyles } from '@material-ui/core/styles'

export const PHOTOS = [
	{'image': 'palouse', 'title': 'Palouse Falls', 'subtitle': 'Palouse Falls State Park, Washington'},
	{'image': 'upper-palouse', 'title': 'Upper Palouse Falls', 'subtitle': 'Palouse Falls State Park, Washington'},
	{'image': 'palouse-river', 'title': 'Palouse River', 'subtitle': 'Palouse Falls State Park, Washington'}
]
export const CAROUSEL_STYLES = {
	root: {
		backgroundColor: 'gray',
		padding: 0
	},
	media: {
		backgroundColor: 'black'
	},
	title: {
		marginBottom: 0,
	},
	mediaBackground: {
		height: 'calc(100% - 90px)',
	},
	text: {
		paddingTop: 12
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
		textAlign: 'center',
		minHeight: '575px',
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
	},
	list: {
		textAlign: 'left',
		listStyle: 'none'
	}
}))
