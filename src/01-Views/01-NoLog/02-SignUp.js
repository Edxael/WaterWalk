
import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { connect } from 'react-redux'


const SignUpComponent = ({navigation,signInUser, logInUser}) => {
  const store = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  let [userData, setUserData] = useState(store)
  

  return (
    <ScrollView style={{padding: 10}}>
      <Title style={{ marginBottom: 10}}>
            Create New Account
      </Title>

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

      <TextInput
        style={{marginBottom: 10}} 
        label="Password"
        placeholder="Password"
        value={userData.password}
        onChangeText={text => setUserData((state) => ({ ...state, password: text }))}
        mode="outlined"
        secureTextEntry={true}
      />

      <TextInput
        style={{marginBottom: 10}} 
        label="Confirm Password"
        placeholder="Confirm Password"
        value={userData.confirmPassword}
        onChangeText={text => setUserData((state) => ({ ...state, confirmPassword: text }))}
        mode="outlined"
        secureTextEntry={true}
      />
      
      <Button
        style={{marginBottom: 10, paddingTop: 10, paddingBottom: 10}}
        mode="contained"
        onPress={() => {
          console.log('Signup', userData)
          signInUser(userData)
          logInUser()
        }}>
        Sign Up
      </Button>

      <Button
        style={{paddingTop: 10, paddingBottom: 10}}
        mode="outlined"
        onPress={() => {
            console.log('Cancel sign up')
            navigation.navigate('LogIn')
      }}>
        Cancel
      </Button>


    </ScrollView>
  );
}

function mapDispatcherToProps(dispatch) {
  return {
    signInUser: (userData) => dispatch({ type: 'SIGN_UP_USER', userData }),
    logInUser: () => dispatch({ type: 'LOGIN_USER' })
  }
}

export default connect(null, mapDispatcherToProps)(SignUpComponent);
