import { Button, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    list: {
        margin: 0,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    homeBtn: {
        margin: 0,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
  }));


let links = {
    home: '/',
    act: '/account',
    dsh: '/dashboard',
    trd: '/trading',
    mrk: '/market'
};

export default function SideNav({selectedPage}) {
    const classes = useStyles();
    const navToHome = () => {
        window.location = links.home;
    }
    const navToDsh = () => {
        window.location = links.dsh;
    }
    const navToAct = () => {
        window.location = links.act;
    }
    const navToTrd = () => {
        window.location.href = links.trd;
    }
    const navToMrk = () => {
        window.location.href = links.mrk;
    }
    return(
            <List className={classes.list}>
                    <ListItem>
                        <Button className={classes.homeBtn} size='large' variant='outlined' onClick={navToHome}>Home</Button>
                    </ListItem>
                    <ListItem button selected={selectedPage === 0} onClick={navToDsh}>
                        <ListItemIcon><DashboardIcon color={selectedPage === 0 ? 'secondary': 'inherit'} /></ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                    <ListItem button selected={selectedPage === 1} onClick={navToAct}>
                        <ListItemIcon><AccountBalanceWalletIcon color={selectedPage === 1 ? 'secondary': 'inherit'}/></ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItem>
                    <ListItem button selected={selectedPage === 2} onClick={navToTrd}>
                        <ListItemIcon><ShowChartIcon color={selectedPage === 2 ? 'secondary': 'inherit'} /></ListItemIcon>
                        <ListItemText>Trading</ListItemText>
                    </ListItem>
                    <ListItem button selected={selectedPage === 3} onClick={navToMrk}>
                        <ListItemIcon><AssessmentIcon color={selectedPage === 3 ? 'secondary': 'inherit'} /></ListItemIcon>
                        <ListItemText>Market</ListItemText>
                    </ListItem>
            </List>
        );
}
