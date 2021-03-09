import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/main/home/Home';
import Footer from '../pages/footer/Footer';
import Routes from './Routes';
import Login from '../pages/main/login/Login';
import Register from '../pages/main/register/Register';

export default (
    <>
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 flex flex-col">
                <Switch>
                    <Route exact path={Routes.FORSIDE} render={() => <Home />} />
                    <Route exact path={Routes.OPRET_GASTEPROFIL} render={() => <Home />} />
                    <Route exact path={Routes.OPRET_SKIPPERPROFIL} render={() => <Home />} />
                    <Route exact path={Routes.OM_OS} render={() => <Home />} />
                    <Route exact path={Routes.VÆRD_AT_VIDE} render={() => <Home />} />
                    <Route exact path={Routes.ØKONOMI} render={() => <Home />} />
                    <Route exact path={Routes.PRIVATLIVSPOLITIK} render={() => <Home />} />
                    <Route exact path={Routes.LOGIN} render={() => <Login />} />
                </Switch>
            </div>
            <Footer />
        </div>
    </>
)