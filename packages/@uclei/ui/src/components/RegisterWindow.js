import React from 'react';
import Button from '@material-ui/core/Button';
import { Grow, Paper, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LottieRegister from '../images/Lottie_Register';

const useStyles = makeStyles((theme) => ({
    root: {
      borderRadius: '30px',
      padding: '1em',
      textAlign: 'center'
    },
    LoginWindow: {
    }
    }));

export default function RegisterWindow () {
    const classes = useStyles();
    const [username, setUsername] = React.useState(undefined);
    const [password, setPassword] = React.useState(undefined);
    const [re_password, setRe_Password] = React.useState(undefined);
    const [first_name, setFirstName] = React.useState(undefined);
    const [last_name, setLastName] = React.useState(undefined);

    return (        
      <Grow in={true}>   
      <Paper className={classes.root}>
      <LottieRegister />
      <Grid className={classes.LoginWindow} container spacing={2}>
        <Grid item xs={12}><Typography variant='h4'>Create Account</Typography></Grid>

        <Grid item xs={6}>
          <TextField variant='outlined' label='First Name' value={first_name} onChange={(e)=>setFirstName(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField variant='outlined' label='Last Name' value={last_name} onChange={(e)=>setLastName(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField variant='outlined' label='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <TextField variant='outlined' type='password' label='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField variant='outlined' type='password' label='Confirm' value={re_password} onChange={(e)=>setRe_Password(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='primary'>Create</Button>
        </Grid>
      </Grid>
      </Paper>
      </Grow>
    )
}