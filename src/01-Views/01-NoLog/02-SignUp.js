
import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Login from './01-LogIn'



const SignUpComponent = (props) => {
  
  const { navigation } = props

  const store = {
    firstName: '',
    lastName: '',
    email: ''
  };

  let [userData, setUserData] = useState(store)
  

  return (
    <View style={{padding: 10}}>
      <Text>
        Create New Account
      </Text>

      <TextInput
        style={{ marginBottom: 10}} 
        label="First Name"
        placeholder="First Name"
        value={userData.firstName}
        onChangeText={text => setUserData((state) => ({ ...state, firstName: text }))}
        mode="outlined"
      />

      <TextInput
        style={{marginBottom: 10}} 
        label="Last Name"
        placeholder="Last Name"
        value={userData.lastName}
        onChangeText={text => setUserData((state) => ({ ...state, lastName: text }))}
        mode="outlined"
      />

      <TextInput
        style={{marginBottom: 10}} 
        label="Email"
        placeholder="Email"
        value={userData.email}
        onChangeText={text => setUserData((state) => ({ ...state, email: text }))}
        mode="outlined"
      />
      
      <Button
        style={{marginBottom: 10}} 
        icon="camera"
        mode="contained"
        onPress={() => {
            console.log('Signup',userData)
            // navigation.navigate('SignUp')
      }}>
        Sign Up
      </Button>

      <Button
        style={{marginBottom: 10}} 
        icon="camera"
        mode="contained"
        onPress={() => {
            console.log('Cancel sign up')
            navigation.navigate('LogIn')
      }}>
        Cancel
      </Button>


    </View>
  );
}

export default SignUpComponent;