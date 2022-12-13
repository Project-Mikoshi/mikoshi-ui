import React from 'react'
import {
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
  CardFooter,
  CardMedia,
  Typography
} from '@mikoshi/components/core'
// @ts-expect-error
import LizardImg from '../../asset/contemplative-reptile.jpeg'

export default {
  title: 'Core/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

const SimpleCardTemplate = (props: any) => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Container className='m-flex-justify-center m-flex-align-center m-height-100' flex>
      <Card sx={ { width: '400px', height: '400px' } }>
        <CardHeader title='Simple Card'/>
        <CardActionArea onClick={props.onClick}>
          <Container>
            <Typography sx={{ fontSize: 14 }} color='primary'>Word of the Day</Typography>
            <Typography variant='h5' component='div'>{'be • nevo • lent'}</Typography>
            <Typography sx={{ mb: 1.5 }} color='primary'>adjective</Typography>
          </Container>
        </CardActionArea>
        <CardContent>
          <Typography variant='body2'>well meaning and kindly</Typography>
          <Typography variant='body2' color='secondary'>{'\'a benevolent smile\''}</Typography>
        </CardContent>
        <CardFooter>
          <Button onClick={props.onClick} variant='contained'>Learn More</Button>
        </CardFooter>
      </Card>
    </Container>
  )
}

const MediaCardTemplate = (props: any) => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Container className='m-flex-justify-center m-flex-align-center m-height-100' flex>
      <Card sx={ { width: '400px', height: '400px' } }>
        <CardMedia component='img' image={LizardImg} />
        <CardContent>
          <Typography variant='h5'>Lizard</Typography>
          <Typography variant='body2' color='secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardFooter>
          <Button color='primary' onClick={props.onClick}>Share</Button>
          <Button color='primary' onClick={props.onClick}>Learn More</Button>
        </CardFooter>
      </Card>
    </Container>
  )
}

export const SimpleCardDemo = SimpleCardTemplate.bind({})
export const MediaCardDemo = MediaCardTemplate.bind({})
