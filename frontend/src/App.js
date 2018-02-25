import React, { Component } from 'react';
import FrontPage from './components/frontpage/FrontPage';
import Unsubscribe from './components/unsubscribe-page/Unsubscribe';
import CareersPage from './components/careerspage/CareersPage';
import MediaRelations from './components/media-relations/MediaRelations';
import InvestorRelations from './components/investor-relations/InvestorRelations';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code;
    return children
  }}/>
);

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1> Sorry, can't find that. </h1>
    </div>
  </Status>
);

class App extends Component {
  render() {
    return (
      // Client Sided Routing
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage}/>
          <Route path='/careers' component={CareersPage}/>
          <Route path='/media-relations' component={MediaRelations}/>
          <Route path='/investor-relations' component={InvestorRelations}/>
          <Route path="/unsubscribe" component={Unsubscribe}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
