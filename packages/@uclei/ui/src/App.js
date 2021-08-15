import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import  { BreakpointProvider } from 'react-socks';
import Intro from './pages/Intro.js';
import Dashboard from './pages/Dashboard.js'
import Account from './pages/Account.js'
import Trading from './pages/Trading.js'
import Market from './pages/Market.js'


export default function App(){

    return (
        <React.Fragment>
            <BreakpointProvider>
            
                <Router>
                        <Switch>
                            <Route exact path="/" component={()=> <Intro />}/>
                            <Route path="/Dashboard" component={()=> <Dashboard />}/>  
                            <Route path="/Account" component={()=> <Account />}/>  
                            <Route path="/Trading" component={()=> <Trading />}/> 
                            <Route path="/Market" component={()=> <Market />}/>                      
                        </Switch>
                </Router>
            </BreakpointProvider>
        </React.Fragment>
    )
};
