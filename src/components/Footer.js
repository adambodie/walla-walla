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
    padding: '10px',
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography component="h4" variant="h6" color="primary" align="left" noWrap className={classes.title} >
          © 2016 Adam Bodie, Inc.
        </Typography>
    </div>
  );
}
