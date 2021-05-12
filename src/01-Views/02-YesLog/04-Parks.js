import React from 'react';
import { Text, View } from 'react-native';
import NavBar from '../../02-Components/01-NavBar'
import { useTheme, Button } from 'react-native-paper';

const ParksComp = (props) => {
  const { colors } = useTheme();
  console.log("--[ Colors ]-------------------------")
  console.log(colors)
  console.log("---------------------------")
  return (
    <View>
      <NavBar 
      title={"my title"} 
      subTitle={"Account"}
      navigation={props.navigation}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        
        <Text>
          Parks Comp GGGGG
        </Text>
         <Text>
          Second Text
        </Text>
        <Button icon="camera" color={colors.secondary} mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </View>
  );
}

export default ParksComp;
