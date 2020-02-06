import React from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route  path="/" component={Admin}></Route>
                    <Route  path="/login" component={Login}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App


