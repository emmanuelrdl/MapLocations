/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './Home';


class MapLocations extends Component {


  renderScene(route, navigator) {
    return React.createElement(route.component, { ...this.props, ...route.passProps, route, navigator } )
  }

  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      initialRoute={{component: Home}}
      renderScene={this.renderScene}
      />

    )
  }
}

AppRegistry.registerComponent('MapLocations', () => MapLocations);
