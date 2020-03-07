import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home/Home';
import Menu from '../components/menu/Menu';
import Routes from './Routes';

export default (
    <div>
        <Menu />
        <Switch>
            <Route exact path={Routes.FORSIDE} render={() => (<Home />)} />
            <Route exact path={Routes.ALLE_SEJLTOGTER} render={() => (<div>Coming soon</div>)} />
            <Route exact path={Routes.OPRET_GASTEPROFIL} render={() => (<div>Coming soon</div>)} />
            <Route exact path={Routes.OPRET_SKIPPERPROFIL} render={() => (<div>Coming soon</div>)} />
            <Route exact path={Routes.OM_OS} render={() => (<div>Coming soon</div>)} />
            <Route exact path={Routes.VÆRD_AT_VIDE} render={() => (<div>Coming soon</div>)} />
            <Route exact path={Routes.ØKONOMI} render={() => (<div>Coming soon</div>)} />
            <Route exact path={Routes.PRIVATLIVSPOLITIK} render={() => (<div>Coming soon</div>)} />
            <Route exact path={Routes.LOGIN} render={() => (<div>Coming soon</div>)} />
        </Switch>
    </div>
)