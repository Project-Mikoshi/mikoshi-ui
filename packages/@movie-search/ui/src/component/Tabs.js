import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
      color: 'black',
      fontWeight: 'bold',
  }
}));

export default function TabsWrappedLabel(action) {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>     

      <Tabs className={classes.tabs} value={value} onChange={handleChange} centered indicatorColor="secondary" textColor="secondary" variant="fullWidth">      
        <Tab value="one" label='Search' {...a11yProps('one')} 
            onClick={()=>{              
                action.render.render.renderSearch()
            }}
        />
        <Tab value="two" label='Nomination' {...a11yProps('two')} 
            onClick={()=>{              
              action.render.render.renderNomination()
            }}  
        />     
      </Tabs>
    </div>
    
    
  );
}