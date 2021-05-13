import React, { useState }  from 'react';
import { Text, View } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';
import { connect } from 'react-redux'

const LogIn = ({ navigation, logInUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{padding: 10}}>
        <Headline style={{ marginBottom: 10}}>
            Welcome to Water Walk!
        </Headline>

        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={text => setEmail(text)}
          style={{ marginBottom: 10}}
        />

        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          onChangeText={text => setPassword(text)}
          style={{ marginBottom: 10}}
        />

        <Button mode="text" style={{ marginLeft: 'auto'}}
          onPress={() => {
            console.log('Forgot Password') }
          } >
          Forgot your password?
        </Button>
        <Button mode="contained"
          style={{ marginBottom: 10, paddingTop: 10, paddingBottom: 10}}
          onPress={() => {
            console.log('Attempting to login', email, password)
            logInUser()
        }}>
          Log In
        </Button>

        <Button mode="outlined" style={{paddingTop: 10, paddingBottom: 10}}
          onPress={() => {
            console.log('Sign up clicked')
              navigation.navigate('SignUp')
             }
          } >
          Sign Up
        </Button>

    </View>
  );
}

function mapDispatcherToProps(dispatch) {
  return {
    logInUser: () => dispatch({ type: 'LOGIN_USER' })
  }
}

export default connect(null, mapDispatcherToProps)(LogIn);


