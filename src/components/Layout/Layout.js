import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
      return (
        <Aux>
          <Toolbar />
          <main className="Content">{this.props.children}</main>
        </Aux>
      );
    };
};

export default Layout;