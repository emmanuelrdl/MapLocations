import React, {Component} from 'react';
import {View, Navigator, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import { styles } from './StyleSheet';
import Locations from './locations.json'



class IndexLocations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locations: Locations
    }
  }

 componentWillMount() {
   this.displayMarkers()
 }

 displayMarkers(){
   const markers = this.state.locations.map((location) => this.getMarker(location));
   return (
     markers
   )
 }

 getMarker(location){

    return(
      <MapView.Marker
       coordinate={{latitude: location.latitude,
       longitude: location.longitude}}
       title={"title"}
       description={"description"}
        />
    )
  }



 render(){
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
       {this.displayMarkers()}
     </MapView>
     </View>
    )
  }
}


export default IndexLocations;
