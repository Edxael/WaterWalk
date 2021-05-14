import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import eventDates from '../../assets/TempData/calDates'

const MapComp = (props) => {
    
    console.log("Map Location:",props.location)
    return (
        <View >
            <MapView
                style={styles.map}
                region={props.location}>
                <Marker coordinate={{ latitude: props.location.latitude, longitude: props.location.longitude }}>
                    {/* <View style={{backgroundColor: "red", padding: 10}}>
                        <Text>Park</Text>
                    </View> */}
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})

export default MapComp 