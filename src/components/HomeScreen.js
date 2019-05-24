import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import NavHeader from './NavHeader';
import PageWidgets from './PageWidgets';


export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        Welcome to the HomeScreen component. Here we will build out a prototype 
        of all our screen components.

        <p>First we have the navigation</p>
        <NavHeader />


        <div>Then we have the main content section</div>

        <PageWidgets />
      </div>
    )
  }
}
