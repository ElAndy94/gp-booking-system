import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Redirect,
import { Calendar } from 'fullcalendar';
// import $ from 'jquery';
// import 'fullcalendar';

// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Appointments.css';

class Appointments extends Component {

    render() {
        document.addEventListener('DOMContentLoaded', () => {
            let calendarEl = document.getElementById('calendar');
            let calendar = new Calendar(calendarEl, {
                weekends: false,
                handleWindowResize: true,
                editable: false,
                eventLimit: false,
                header: {
                    center: "title",
                    left: "prev,next today",
                    right: "month,agendaWeek,agendaDay,listMonth",
                },
            });
            calendar.render();
        });
        return (
            <Aux>
                {/* <h1>Test Appointments</h1> */}
                <div className="smaller-calendar">
                    <div id="calendar"></div>
                </div>
            </Aux>
        );
    }
}

export default withRouter(Appointments);