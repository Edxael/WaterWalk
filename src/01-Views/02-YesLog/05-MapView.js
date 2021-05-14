import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'
import MapComp from '../../02-Components/02-MapComponent'

const MapView = ({ navigation, route }) => {
  // this is the data we will be feeding to the map component.
  const mapLocation = {
    latitude: route.params.park.latitude,
    longitude: route.params.park.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  }

  return (
    <View>
      <NavBar 
        title={route.params.park.name} 
        subTitle={"Account"}
        navigation={navigation}
      />

      <View style={styles.mainView}>

        <MapComp location={mapLocation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 15
  }
})

export default MapView;
