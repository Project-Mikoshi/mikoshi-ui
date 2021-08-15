import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import TemporaryDrawer from "./Menu.js"
import { Avatar } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    backgroundColor: '#ff5722',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const PrimarySearchAppBar = ({currentPage, userName}) => {

  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const callBackendAPI = async () => {
    const response = await fetch('/logout');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };


  const setSearchQuery = (event) => {
      setSearch(event.target.value);
  }

  const handleSubmit = async (event) => {

    if(event.charCode === 13) {      
      let url = `/stock-data?search=${event.target.value.toUpperCase()}`;
        const response = await fetch(url);
        const stock = await response.json();
        if (stock[0].symbol === "D35-C") {
          alert("Failed to find a stock with that symbol");
          return;
        }

      let location = {
        pathname: `/market/${event.target.value.toUpperCase()}`,
        state: {
          query: event.target.value
        }
      }
      history.push(location);
    }
}

  const logout = (value) => {
    callBackendAPI().catch(err => console.log(err));
    history.push('/');
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose} >

      <MenuItem onClick={() => {
          handleMenuClose()
          logout()
            }}>
        Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
        <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const content  = (

      <div style={{marginBottom:75}} className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
            <TemporaryDrawer currentPage={currentPage}/>
          <Typography className={classes.title} variant="h6" noWrap>
            {currentPage}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for a Stock…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange = {setSearchQuery}
              value = {search}
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={handleSubmit}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar variant='circle' className={classes.userIcon}>
                {String(userName).toUpperCase().charAt(0)}
              </Avatar>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

    </div>




  )

  return (
    content
  );
}

export default withRouter(PrimarySearchAppBar);
