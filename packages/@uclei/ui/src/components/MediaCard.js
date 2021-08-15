import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0% auto',
    padding: '0.5em',
    borderRadius: '15px',
    textAlign: 'center',
  },
  media: {
    height: 140,
    borderRadius: 15
  },
});

const MediaCard = ({articleImg, articleSource, articleDesc, articleLink}) => {
  const classes = useStyles();

  return (
    <Grow in={true}>
    <Card className={classes.root} variant='elevation'>
      <CardActionArea href={articleLink} target='_blank'>
        <CardMedia className={classes.media} image={articleImg} title={articleDesc} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {articleSource}
          </Typography>
          <Typography variant="body2" color="#fff" component="p">
          {articleDesc}
          </Typography>
          <br/>
          <Button variant='outlined' href={articleLink} target='_blank' size='medium' >
            Read Article
          </Button>
        </CardContent>
        </CardActionArea>
    </Card>
    </Grow>
  );
}

export default MediaCard;