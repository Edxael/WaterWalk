import React, { useState }  from 'react';
import { Text, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const LogIn = ({ navigate }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{padding: 10}}>
        <Title style={{ marginBottom: 10}}>
            Welcome to Water Walk!
        </Title>

        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={text => setUsername(text)}
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
            console.log('Attempting to login', username, password)
        }}>
          Log In
        </Button>

        <Button mode="outlined" style={{paddingTop: 10, paddingBottom: 10}}
          onPress={() => {
            console.log('Sign up clicked')
            // navigation.navigate('Forgot Password')
             }
          } >
          Sign Up
        </Button>

    </View>
  );
}

export default LogIn;


