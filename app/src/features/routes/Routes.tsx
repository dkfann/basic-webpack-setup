import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from 'features/home/Home'

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
            </Switch>
        </BrowserRouter>
    )
}