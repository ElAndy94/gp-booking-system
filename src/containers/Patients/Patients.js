import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Redirect,
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Patients.css';
import Patient from '../../components/Patient/Patient';

class Patients extends Component {
    state = {
        patients:[
            {
                title: 'Mr',
                firstName: 'Andrew',
                lastName: 'Peliza'
            }, 
            {
                title: 'Mr',
                firstName: 'Charles',
                lastName: 'Nico'
            }
        ]
    }

    // componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/api/')
    //         .then(res => {
    //             this.setState({
    //                 articles: res.data
    //             });
    //         })
    // }

    render() {
        const Patients = this.state.patients.map(patient => {
            return  (
            <Patient
              key={patient.lastName}
              title={patient.title}
              firstName={patient.firstName}
              lastName={patient.lastName} />
            );
          });
        return(
            <Aux>
                <h1>Test Patients</h1>
                {Patients}
            </Aux>
        );
    }
}

export default withRouter(Patients);