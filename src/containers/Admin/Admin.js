import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Redirect,
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Admin.css';

class Admin extends Component {
    render() {
        return (
            <Aux>
                <h1>Test Admin</h1>
            </Aux>
        );
    }
}

export default withRouter(Admin);