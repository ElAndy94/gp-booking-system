import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
// import Aux from '../../../hoc/Aux';


const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>Dash Board</NavigationItem>
  </ul>
);

export default navigationItems;
