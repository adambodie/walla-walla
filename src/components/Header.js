import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
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

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography component="h1" variant="h4" color="white" align="center" noWrap className={classes.title} >
          Adam's Wonderful Wild Weekend in Walla Walla Washington
        </Typography>
        <Typography component="p" color="inherit" className={classes.title}>
        With a full time job at Seterus and the ability to take PTO, I took my first day off on Friday March 18th. Looking for action, I headed east to Walla Walla, Washington. Here's my trip to Walla Walla...
        </Typography>
    </div>
  );
}

