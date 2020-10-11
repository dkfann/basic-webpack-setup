import React from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

import { Login } from 'features/login'
import { Home } from 'features/home'

export function Routes() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Login}
                />
                <Route
                    path="/home"
                    component={Home}
                />
            </Switch>
        </Router>
    )
}