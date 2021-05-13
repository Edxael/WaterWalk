import React from 'react';
import { Text, View } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'
import { useTheme, Menu } from 'react-native-paper';

const ParksComp = (props) => {

  return (
    <View>
      <NavBar 
      title={"my title"} 
      subTitle={"Account"}
      navigation={props.navigation}
      />
      <View>
        <Text>List of parks near you</Text>
        
        <View>
          <Menu.Item icon="walk" onPress={() => {}} title="Legacy Park" />
          <Menu.Item icon="walk" onPress={() => {}} title="Pioneer Park" />
          <Menu.Item icon="walk" onPress={() => {}} title="Lions Garden" disabled />
          <Menu.Item icon="walk" onPress={() => {}} title="Indoor Park" disabled />
          <Menu.Item icon="walk" onPress={() => {}} title="Mountain Trail" />
        </View>
        
      </View>
    </View>
  );
}

export default ParksComp;
