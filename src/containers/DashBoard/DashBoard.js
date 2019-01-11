import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Redirect,
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './DashBoard.css';

class DashBoard extends Component {
    render() {
        return(
            <Aux>
                <div className="container">
                    <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <h3 className="title is-size-3 has-text-centered title-pad-top">Welcome to Peliza Surgeries.</h3>
                        <div className="columns" id="col-pad-top">
                        <div className="column">
                            <h3 className="title is-size-4" id="title-pad-left">Opening Times</h3>
                            <table className="table">
                            <tbody>
                                <tr>
                                <th>Monday</th>
                                <td>08:30 - 18:00</td>
                                </tr>
                                <tr>
                                <th>Tuesday</th>
                                <td>08:30 - 18:00</td>
                                </tr>
                                <tr>
                                <th>Wednesday</th>
                                <td>08:30 - 18:00</td>
                                </tr>
                                <tr>
                                <th>Thursday</th>
                                <td>08:30 - 18:00</td>
                                </tr>
                                <tr>
                                <th>Friday</th>
                                <td>08:30 - 18:00</td>
                                </tr>
                                <tr>
                                <th>Weekend</th>
                                <td className="is-italic">closed</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="column">
                            <p className="is-size-5 has-text-weight-semibold pad-under">Existing Patients:</p>
                            <p>To make an appointment, please log in.</p>
                            <br />
                            <p className="is-size-5 has-text-weight-semibold pad-under">New Patients:</p>
                            <p>If you wish to register as a new patient, please visit the surgery with both proof of identification and address.
                            Our reception staff will be happy to help you.</p>
                            <br />
                            <p className="is-size-5 has-text-weight-semibold has-text-info pad-under">If we are closed:</p>
                            <p>Between 18:00 and 08:00 each weekday and at all times over the weekend and public holidays, emergency cover is
                            handled by NHS 111.</p>
                            <br />
                            <p>You can access urgent assistance by calling NHS direct on 111.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default withRouter(DashBoard);