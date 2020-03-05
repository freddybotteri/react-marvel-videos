import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FourOFour from "../pages/FourOFour";
import Home from '../pages/Home';
import Video from '../pages/Video';
import PrivateRoute from "../components/PrivateRoute";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/home" component={Home}/>
      <Route path="/video" component={Video} />
      <Route component={FourOFour}/>
    </Switch>
  </Router>
)
