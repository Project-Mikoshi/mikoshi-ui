import React from 'react'
import {
  Button,
  Container,
  Paper,
  Snackbar,
  TextField,
  Zoom,
  Alert
} from '@mui/material'

export default function ContactPage () {
  const [open, setOpen] = React.useState(false)
  const [alert, setAlert] = React.useState('success')
  const [alertMessage, setAlertMessage] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleSend = () => {
    setAlert('success')
    setAlertMessage(`Message has been sent, thank you!`)
    setOpen(true)
  }

  return(         
    <Zoom in={true}>     
      <Container className='contact'>
        <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
          <TextField label="Message" value={message} onChange={(e)=>setMessage(e.target.value)} multiline rows={5} fullWidth margin='normal' />
          <Button color='primary' variant='contained' disabled={!message} onClick={handleSend}>Send</Button>
        </Paper>
        <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} autoHideDuration={1000} open={open} onClose={() => setOpen(false)}>
          <Alert severity='success'>{alertMessage}</Alert>  
        </Snackbar>       
      </Container>
    </Zoom>    
  )
}