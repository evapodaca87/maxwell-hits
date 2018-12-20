import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import Music from './Component/Music';
import Contact from './Component/Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/music' component={Music} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
