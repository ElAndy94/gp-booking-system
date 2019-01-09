import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './DashBoard.css';

class DashBoard extends Component {

    render() {
        return(
            <Aux>
                <h1>Hi</h1>
            </Aux>
        );
    }
}

export default withRouter(DashBoard);