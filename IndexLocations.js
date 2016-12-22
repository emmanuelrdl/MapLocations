import React, {Component} from 'react';
import {View, Navigator, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import { styles } from './StyleSheet'



class IndexLocations extends Component {

  render(){
    var markers = [
      {
        latitude: 48.866667,
        longitude: 2.333333,
        title: 'Foo Place',
        subtitle: '1234 Foo Drive'
      }
    ];

    return(
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
           initialRegion={{
             latitude: 46.8167,
             longitude: 1.7,
             latitudeDelta: 0.1922,
             longitudeDelta: 0.0421,
           }}
         >
      <MapView.Marker
       coordinate={{latitude: 46.8167,
       longitude: 1.7}}
       title={"title"}
       description={"description"}
        />
     </MapView>
     </View>

    )


  }



}


export default IndexLocations;
