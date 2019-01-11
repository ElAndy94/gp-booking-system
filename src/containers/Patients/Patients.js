import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Redirect,
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Patients.css';

class Patients extends Component {
    render() {
        return(
            <Aux>
                <h1>Test Patients</h1>
            </Aux>
        );
    }
}

export default withRouter(Patients);