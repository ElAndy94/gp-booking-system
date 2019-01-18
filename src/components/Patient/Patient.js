import React from "react";

import './Patient.css';

const patient = (props) => (
    <div className="container">
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {props.title + ' ' + props.firstName + ' ' + props.lastName}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                Remind me to thank John for a lovely weekend. So you two dig up, dig up dinosaurs.
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            <footer className="card-footer">
                <a href="/" className="card-footer-item">Save</a>
                <a href="/" className="card-footer-item">Edit</a>
                <a href="/" className="card-footer-item">Delete</a>
            </footer>
        </div>
        <br />
    </div>
);

export default patient; 