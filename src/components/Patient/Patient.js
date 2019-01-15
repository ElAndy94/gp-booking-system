import React from "react";

const patient = (props) => (
  <article>
        <h2>{props.title + ' ' + props.firstName + ' ' + props.lastName}</h2>
    </article>
);
export default patient;