import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import DashBoard from './containers/DashBoard/DashBoard';
import Appointments from './containers/Appointments/Appointments';
import Patients from './containers/Patients/Patients';
import Admin from './containers/Admin/Admin';
import './App.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/appointments" component={Appointments} />
        <Route path="/patients" component={Patients} />
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={DashBoard} />
        <Redirect to="/" />
      </Switch>
  );

    return(
      <Layout>
        {routes}
      </Layout>
    );
  }
}

export default withRouter(App);
