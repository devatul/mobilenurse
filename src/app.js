import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, hashHistory } from 'react-router';
import { HashRouter } from 'react-router-dom';



ReactStormpath.init();
console.log(hashHistory );
ReactDOM.render(
    <Router history={hashHistory}>
        <HomeRoute path='/' component={MasterPage}>

            <IndexRoute component={IndexPage} />
            <AuthenticatedRoute>
                 <HomeRoute path='/profile' component={ProfilePage} />
            </AuthenticatedRoute>
            <LoginRoute path='/login' component={LoginPage} />
            <Route path='/register' component={RegistrationPage} />
        </HomeRoute>
    </Router>,
  document.getElementById('app-container')
);