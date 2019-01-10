import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './DashBoard.css';

class DashBoard extends Component {
    render() {
        return(
            <Aux>
                <h2>Welcome to Peliza Surgeries</h2>
                <div class="container">
                    <div class="column">
                        <h3>Opening Times</h3>
                        <table>
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
                                    <td>closed</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <table>
                            <tr><th>Sunday</th><td>Closed</td></tr>
                            <tr><th>Monday</th><td>9am - 5pm</td></tr>
                            <tr><th>Tuesday</th><td>9am - 5pm</td></tr>
                            <tr><th>Wednesday</th><td>9am - 5pm</td></tr>
                            <tr><th>Thursday</th><td>9am - 5pm</td></tr>
                        </table> */}
                    </div>
                    <div class="column">
                    <div>
                        <h3>Exciting</h3>
                        
                    </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default withRouter(DashBoard);