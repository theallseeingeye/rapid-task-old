import React, { Component } from 'react';
import FrontPage from './components/frontpage/FrontPage';
import AppHome from './components/webapp/app-home/AppHome';
import Unsubscribe from './components/unsubscribepage/Unsubscribe';
import CareersPage from './components/careerspage/CareersPage';
import MediaRelations from './components/media-relations/MediaRelations';
import InvestorRelations from './components/investor-relations/InvestorRelations';
import MapApp from './components/webapp/app-maps/AppMap';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Error404 from './components/error-pages/Error404';

/*
This page helps handles all the routes

Use of HashRouter is required for static hosting of this app. It helps remember routes after the page refreshes.
Drawback is that it shows the # in the urls. UPDATE: We decided it is ugly and are looking into server sided rendering
so we can keep BrowserRouter for use.

*/


const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code;
    return children
  }}/>
);

const NotFound = () => (
  <Status code={404}>
    <Error404/>
  </Status>
);

class App extends Component {
  render() {
    return (
      // Client Sided Routing
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage}/>
          {/*<Route path="/webapp" component={AppHome}/>*/}
          <Route path='/careers' component={CareersPage}/>
          <Route path='/media-relations' component={MediaRelations}/>
          <Route path='/investor-relations' component={InvestorRelations}/>
          <Route path="/unsubscribe" component={Unsubscribe}/>
          {/*<Route path="/map" component={MapApp}/>*/}
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
