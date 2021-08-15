import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import { Container, Grow, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    content: {
      margin: '1% auto',
      borderRadius: '30px',
      padding: '1em',
      textAlign: 'center',
      maxWidth: "620px"
    }
  }));


export default function Trading() { 
  const classes = useStyles();
  return(
      <Container className={classes.root}>
        <Header currentPage='Trading' userName={'Anthony'}/>
        <Grow in={true}>
        <Paper className={classes.content}>
          <Typography variant='h4'>Trading</Typography>     
        </Paper>
        </Grow>
      </Container>
      )
 }
