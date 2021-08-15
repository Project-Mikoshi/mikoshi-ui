import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavigationIcon from '@material-ui/icons/Navigation';
import { Button, ButtonGroup, Container, Grow, Paper } from '@material-ui/core';
import LoginWindow from "../components/LoginWindow"
import RegisterWindow from "../components/RegisterWindow"
import StockLottie from "../images/Lottie_StockMarketAnalysis"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: 'left'
    },
    font: {
      color: "#000"
    },
    li: {
      color: "#000",
      textDecoration: 'none',
      '&:hover':{
        color: '#6C9FF8',
        cursor: 'pointer'
      },
    },
    content: {   
      margin: '10px auto',
      marginTop: '70px',
      width: "60%",
      padding: '40px', 
      textAlign: 'center',
      borderRadius: '30px',
    },
    form_content: {   
      margin: '0 auto',
      marginTop: '30px',
      padding: '40px', 
      textAlign: 'center',
      borderRadius: '30px',
    },
  }));


export default function Intro(props) { 
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = React.useState(props.auth);
  const [Login, setLogin] = React.useState(false);
  const [Register, setRegister] = React.useState(false);
  const handleLogin = () =>{        
    !loggedIn? renderLogin() : window.location.href="/dashboard"    
  }
  const renderLogin = () => {
    setLogin(true)
    setRegister(false)
  }
  const renderRegister = () => {
    setLogin(false)
    setRegister(true)
  }
  return(
      <div className={classes.root}>
          <AppBar position="fixed">
              <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                          Welcome to UCLEI
                  </Typography>
              </Toolbar>
          </AppBar>
          
          {!Login && !Register && (
            <Grow in={true}>
            <Paper maxWidth="sm" className={classes.content}>  
            <Button color='primary' variant='contained' onClick={()=>window.location.href="/dashboard"}>Dashboard</Button>            
                <h1 className={classes.font}>UCLEI</h1>          
                <Typography variant="h6" className={classes.title}>        
                  UCLEI is a stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.                        
                </Typography>
                <br />
                <Typography variant="h6" className={classes.title}>  
                  Simply create an account and you are free to explore the excitement of stock trading without consequence!
                </Typography>
                <StockLottie />
                <br/>
                <Button variant="contained" color='primary' onClick={handleLogin}>                        
                  <NavigationIcon /> Get Started 
                </Button>              
            </Paper>
            </Grow>
          )}
          {Login && (      
            <Container maxWidth="sm" className={classes.form_content}>   
             <ButtonGroup variant='contained'>
                <Button color={Login? 'primary':'secondary'} onClick={renderLogin}>I have an account</Button>
                <Button color={Register? 'primary':'secondary'} onClick={renderRegister}>I want to Register</Button>
              </ButtonGroup>             
              <br/>
              <br/>
              <LoginWindow authenicate={()=>setLoggedIn(true)}/> 
            </Container>                       
          )}
          {Register && (      
            <Container maxWidth="sm" className={classes.form_content}>   
             <ButtonGroup variant='contained'>
                <Button color={Login? 'primary':'secondary'} onClick={renderLogin}>I have an account</Button>
                <Button color={Register? 'primary':'secondary'} onClick={renderRegister}>I want to Register</Button>
              </ButtonGroup>             
              <br/>
              <br/>
              <RegisterWindow/>
            </Container>                       
          )}
      </div>
      )
    }
