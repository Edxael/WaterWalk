import React from 'react';
import { View } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'
import { Menu, Title } from 'react-native-paper';
import parks from '../../../assets/TempData/parks'

const ParksComp = ({navigation}) => {
  return (
    <View>
      <NavBar
      title={"Locations"}
      navigation={navigation}
      />
      <View>
        <Title style={{ padding: 10 }}>List of locations near you.</Title>
        <View>
          {
            parks.map((park,idx) =>
              <Menu.Item icon="walk" key={idx} onPress={() => {
                navigation.navigate('MapView',{park})
              }} title={park.name}/>
            )
          }
        </View>

      </View>
    </View>
  );
}

export default ParksComp;
