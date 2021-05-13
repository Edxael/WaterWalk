import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import eventDates from '../../assets/TempData/calDates'

const MapComp = (props) => {
    return (
        <View >
            <MapView
                    style={styles.map}
                    initialRegion={props.location}
                />
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