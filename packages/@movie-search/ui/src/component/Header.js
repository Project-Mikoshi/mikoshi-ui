import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from './Tabs';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {    
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,    
    background: 'rgba( 150, 150, 150, 0.5)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 32px 0 rgba( 50, 50, 50)',
    borderRadius: '5px',
    border: '0.5px solid rgba( 0, 0, 0)',  
    textAlign: "center",  
    padding: '8px',
  }
}));

export default function ClippedDrawer(render) {
  const classes = useStyles();  

  return (
    <div className={classes.root}>  
      <AppBar variant='elevation' position="fixed" className={classes.appBar}>
        <Typography color='secondary' variant='h4'>The Shoppies</Typography>
        <Tabs render={render}/>
      </AppBar>    
    </div>
  );
}