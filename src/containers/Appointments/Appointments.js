import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Appointments.css';

class Appointments extends Component {
    render() {
        return (
            <Aux>
                <h1>Test Appointments</h1>
            </Aux>
        );
    }
}

export default withRouter(Appointments);