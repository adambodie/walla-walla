import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Container } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '400px'
  },
}));

export default function Columns() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>md=4</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>md=4</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>md=4</Paper>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<Paper className={classes.paper}>md=8</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>md=4</Paper>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>md=4</Paper>
					</Grid>
					<Grid item xs={12} md={8}>
						<Paper className={classes.paper}>md=8</Paper>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<Paper className={classes.paper}>md=8</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>md=4</Paper>
					</Grid>
				</Grid>
			</Container>		
		</div>
  );
}
