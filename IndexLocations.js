import React, {Component} from 'react';
import {View, Navigator, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import { styles } from './StyleSheet'



class IndexLocations extends Component {

  render(){
    return(
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
         />
     </View>

    )


  }



}


export default IndexLocations;
