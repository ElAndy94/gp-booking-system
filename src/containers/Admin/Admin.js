import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Redirect,
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Admin.css';
import Patient from '../../components/Patient/Patient';

class Admin extends Component {

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
            return (
                <Aux>
                    <div className="container">
                        <h1>Patients Registered</h1>
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text" placeholder="Search Patient" />
                            </div>
                        </div>
                        {Patients}
                    </div>
                </Aux>
            );
    }
}

export default withRouter(Admin);