import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
// import Aux from '../../../hoc/Aux';


const navigationItems = (props) => (
  <ul className="NavigationItems">
  {/* <i class="fas fa-home"></i> */}
    <NavigationItem link="/" exact>Dash Board</NavigationItem>
    <NavigationItem link="/appointments">Appointments</NavigationItem>
    <NavigationItem link="/patients">Patients</NavigationItem>
    <NavigationItem link="/admin">Admin</NavigationItem>
  </ul>
);

export default navigationItems;
