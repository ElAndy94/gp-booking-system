import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// Redirect,
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Admin.css';

class Admin extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <Aux>
                <h1>Test Admin</h1>
            </Aux>
        );
    }
}

export default withRouter(Admin);