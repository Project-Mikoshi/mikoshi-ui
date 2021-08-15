import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import { Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import PiChart from '../components/PiChart'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    content: {
      margin: '5% auto',
      borderRadius: '30px',
      padding: '1em',
      textAlign: 'center',
      maxWidth: "620px"
    },
    NewsList: {
      margin: '5% auto',
      borderRadius: '30px',
      padding: '1em',
      textAlign: 'center',
      maxWidth: "620px",
      backgroundColor: '#fff'
    }
  }));


export default function Dashboard() { 
  const classes = useStyles();
  return(
      <Container className={classes.root}>
        <Header currentPage='Dashboard' userName={'Anthony'}/>
        <Grow in={true}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.content}>
              <Typography variant='h4'>Account Summary</Typography>     
              <Typography variant='h5'>Jerry Smith</Typography>
              <Typography variant='body2'>Total Balance: 1000</Typography>
              <Typography variant='body2'>Cash Balance: 1000</Typography>
              <Typography variant='body2'>Investment Balance: 1000</Typography>
            </Paper>
            <Paper className={classes.content}>
              <Typography variant='h4'>Asset Allocation</Typography>    
              <PiChart /> 
            </Paper>
            <Paper className={classes.content}>
              <Typography variant='h4'>Market Today</Typography>     
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Container className={classes.NewsList}>
              <Typography variant='h4'>Market Today</Typography>
              <NewsList />
            </Container>
          </Grid>
        </Grid>
        </Grow>
        
      </Container>
      )
 }
