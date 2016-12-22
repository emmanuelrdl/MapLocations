import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,  StyleSheet,   Navigator } from 'react-native';
import { styles } from './StyleSheet'
import IndexLocations from './IndexLocations'


export default class Home extends Component {

 constructor(props){
   super(props)
 }

 _navigate() {
   this.props.navigator.push({
     component: IndexLocations
   })
 }

  render() {
    return (
      <View style={styles.homeContainer}>
        <View  >
          <Text style={styles.h2, {marginBottom:100, marginTop:100}} > Welcome on MapLocations app !</Text>
          <TouchableHighlight onPress={ () => this._navigate() } style={styles.successButton}>
            <Text> Find great places</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
