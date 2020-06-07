import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import CreatePoint from './pages/CreatePoints'
import path from 'path';

const Routes =()=> {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact /> 
            <Route component={CreatePoint} path="/create-point"/>
        </BrowserRouter>
    )

}

export default Routes;