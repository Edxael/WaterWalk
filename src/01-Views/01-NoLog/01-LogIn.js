import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';


const LogInComp = (props) => {
    console.log("--[ Props ]-------------------------")
    console.log(props)
    console.log("---------------------------")
    const { navigation } = props
    console.log("--[ navigation ]-------------------------")
    console.log(navigation)
    console.log("---------------------------")
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
            LogIn Comp
        </Text>

        <Button icon="camera" mode="contained" onPress={() => {
            console.log('Going to SingUp')
            navigation.navigate('SingUp')
        }}>
            SingUp
        </Button>
        <Button icon="camera" mode="contained" onPress={() => {
            console.log('Going to SingUp')
            navigation.navigate('ForgoPassword')
        }}>
            ForgotPassword
        </Button>
    </View>
  );
}

export default LogInComp;


