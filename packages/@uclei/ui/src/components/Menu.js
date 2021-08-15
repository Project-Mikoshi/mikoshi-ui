import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SideNav from './SideNav'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    backgroundColor: '#f0f8ff',
    minwidth: '25%'
  }
  
}));
export default function TemporaryDrawer({currentPage}) {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });  
  };

  function selectedPage() {
    switch (currentPage) {
      case "Dashboard":
        return 0;
      case "Account":
        return 1;
      case "Trading":
        return 2;
      case "Market":
        return 3;
      default:
        return 0;
    }
  }

  return (
    <React.Fragment key={'left'}>
      <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer"  >
        <MenuIcon />
      </IconButton>
      <Drawer classes={{ paper: classes.paper }} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <SideNav selectedPage={selectedPage()} />
      </Drawer>
    </React.Fragment> 
  );
}
