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


export default function Account() { 
  const classes = useStyles();
  return(
      <Container className={classes.root}>
        <Header currentPage='Account' userName={'Anthony'}/>
        <Grow in={true}>
        <Paper className={classes.content}>
          <Typography variant='h4'>Account Summary</Typography>     
          <Typography variant='h5'>Jerry Smith</Typography>
          <Typography variant='body1'>Account: TFSA</Typography>
          <Typography variant='body2'>Total Equity: 1000</Typography>
          <Typography variant='body2'>Cash Balance: 1000</Typography>
          <Typography variant='body2'>Investment Balance: 1000</Typography>
        </Paper>
        </Grow>
      </Container>
      )
 }
