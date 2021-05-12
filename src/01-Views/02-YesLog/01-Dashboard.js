import React from 'react';
import { Text, View } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'

const DashboarComp = (props) => {
  return (
    <View>
      <NavBar 
      title={"my title"} 
      subTitle={"Account"}
      navigation={props.navigation}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        
        <Text>
          Dashboard Comp
        </Text>
      </View>
    </View>
  );
}

export default DashboarComp;