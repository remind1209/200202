import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';


class App extends React.Component {


    render() {
        return (
            <Router>
                <Route exact path="/" component={Admin}></Route>
                <Route path="/login" component={Login}></Route>
            </Router>
        );
    }
}

export default App


