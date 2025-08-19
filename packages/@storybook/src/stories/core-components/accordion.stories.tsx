import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper
} from '@mikoshi/components'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import GetAppIcon from '@mui/icons-material/GetApp'

export default {
  title: 'Core/Accordion',
  component: Accordion,
  args: {
    disableGutters: false,
    square: false
  },
  argTypes: {
    disableGutters: { control: 'boolean' },
    square: { control: 'boolean' }
  }
}

const Template = (props: any) => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Paper>
      <Accordion {...props}>
        <AccordionSummary expandIcon={<KeyboardDoubleArrowDownIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<GetAppIcon />}>
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </Paper>
  )
}

export const AccordionDemo = Template.bind({})
