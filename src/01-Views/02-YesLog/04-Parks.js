import React from 'react';
import { Text, View } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'
import { useTheme, Menu } from 'react-native-paper';
import parks from '../../../assets/TempData/parks'

const ParksComp = ({navigation}) => {
  return (
    <View>
      <NavBar 
      title={"my title"} 
      subTitle={"Account"}
      navigation={navigation}
      />
      <View>
        <Text>List of parks near you.</Text>
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
