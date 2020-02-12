import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </HashRouter>,
    document.getElementById('app')
);
