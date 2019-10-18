import React, { PureComponent } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import routes from './routes'

const hist = createBrowserHistory();

class App extends PureComponent {

    getRoutes = routes => {
        return routes.map((prop, key) => {
            return <Route key={key} path={prop.path} exact={prop.exact} component={prop.component} />
        });
    }

	render() {
		return(
	        <React.Fragment>
                <Router history={hist}>
                    <Header />
                    <Switch>{this.getRoutes(routes)}</Switch>
                    <Footer />
                </Router>
	        </React.Fragment>
	    );
	}

}

export default App;
