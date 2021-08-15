import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from "@material-ui/core/IconButton";
import BackspaceIcon from '@material-ui/icons/Backspace';
import Avatar from '@material-ui/core/Avatar';
import { Button, List, ListItem, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '100px',
      textAlign: 'center',
    },
    content: {   
      margin: '20px auto',
      width: "60%",
      padding: '40px',
      color: "black",  
      background: "rgba(200, 200, 200, 0.4)",
      backdropFilter: 'blur(8px)', 
      textAlign: 'center',
      borderRadius: '30px',
      border: "1px solid rgb(255, 255, 255, 0.2)"
    },
    button: {
      margin: '20px',
      color: '#ffffff'
    },
    avatar: {
      color: theme.palette.getContrastText(blue['A100']),
      backgroundColor: blue['A100'],
    },
  }));


export default function NominationPage(data) {
    const classes = useStyles();

    const movieList = (
      <Zoom in={true}> 
          
        <List>
            {Object.keys(data.movieList).length === 0 && 
              <React.Fragment marginTop='100px'>
                  <Alert color='primary' variant='filled' severity='info'>
                    A bit empty here. You have not nominated any movies yet.
                  </Alert>
              </React.Fragment>
            }
              {data.movieList && Object.keys(data.movieList).map(imdbID => (
                <ListItem>
                <ListItemAvatar>
                  <Avatar alt={data.movieList[imdbID]["Title"]} src={data.movieList[imdbID]["Poster"]} className={classes.avatar} />
                </ListItemAvatar>
                <ListItemText primary={data.movieList[imdbID]["Title"]} secondary={data.movieList[imdbID]["Year"]} />    
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="add" onClick={() => data.removeMovie(data.movieList[imdbID])}>
                  <BackspaceIcon />
                </IconButton>
                </ListItemSecondaryAction>             
              </ListItem>
              ))}  
        </List>    
      </Zoom>
    );

    return (   
      <Zoom in={true} style={{ transitionDelay: '400ms' }}>         
        <main className={classes.root}>       
            <div className={classes.content}>                            
              <Typography variant='h5'>Your Nominations</Typography> 
              <br/>
              {Object.keys(data.movieList).length === data.maxNominations && 
              <React.Fragment marginTop='100px'>
                  <Alert variant='filled' severity={'success'}>{`You have nominated ${data.maxNominations} movies!`}</Alert>
              </React.Fragment>
              }  
              {movieList}
            </div>
            <div>  
              <Button className={classes.button} disabled={Object.keys(data.movieList).length===0} variant='contained' size='large' color='primary' onClick={()=>data.download()}>Save List as JSON</Button>      
            </div>                
        </main>  
      </Zoom>            
    );
}