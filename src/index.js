import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authorization from './components/authorization.js';
import Registration from './components/registration.js';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import About from './components/about.js';
import Movies from './components/movies.js';
import OnlyAuthorized from './components/OnlyAuthorized.js';
import OnlyUnAuthorized from './components/OnlyUnAuthorized.js';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route component={OnlyAuthorized}>
                <Route path="/movies" component={Movies} />
            </Route>
            <Route component={OnlyUnAuthorized}>
                <Route path="/authorization" component={Authorization} />
                <Route path="/registration" component={Registration} />
            </Route>

            <Route path="/about" component={About} />
            {/* <Route path="*" component={Error} /> */}

        </Route>

    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
