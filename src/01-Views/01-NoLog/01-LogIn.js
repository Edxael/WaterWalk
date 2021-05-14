import React, { useState, useEffect }  from 'react';
import { Text, View, Alert, Image, StyleSheet } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';
import { connect } from 'react-redux'

import * as AuthSession from 'expo-auth-session';
import * as Random from "expo-random";
import * as SecureStore from "expo-secure-store";
import jwtDecoder from "jwt-decode";
import queryString from "query-string";
import {
  AUTH_CLIENT_ID,
  AUTH_DOMAIN,
  ID_TOKEN_KEY,
  NONCE_KEY
} from "../../../config.js";

let tempSessionObject;

const generateNonce = async () => {
  const nonce = String.fromCharCode.apply(
    null,
    await Random.getRandomBytesAsync(16)
  );
  await SecureStore.setItemAsync(NONCE_KEY, nonce);
  return nonce;
};

const LogIn = ({ navigation, logInUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reviewAuthData = () => {
    SecureStore.getItemAsync(ID_TOKEN_KEY).then(session => {
      if (session) {
        const sessionObj = JSON.parse(session);
        if (sessionObj.exp > Math.floor(new Date().getTime() / 1000)) {
          logInUser()
        }
      }
    });
  }


  const decodeToken = token => {
    const decodedToken = jwtDecoder(token);
    const { nonce, sub, email, name, exp } = decodedToken;
    SecureStore.getItemAsync(NONCE_KEY).then(storedNonce => {
      if (nonce == storedNonce) {
        
        SecureStore.setItemAsync(
          ID_TOKEN_KEY,
          JSON.stringify({
            id: sub,
            email,
            name,
            exp,
            token
          })
        ).then(() => {
          reviewAuthData()
          // logInUser()
        });
      } else {
        return;
      }
    });
  };

  const handleLoginPress = async () => {
    const nonce = await generateNonce();
    AuthSession.startAsync({
      authUrl:
        `${AUTH_DOMAIN}/authorize?` +
        queryString.stringify({
          client_id: AUTH_CLIENT_ID,
          response_type: "id_token",
          scope: "openid profile email",
          redirect_uri: AuthSession.getRedirectUrl(),
          nonce
        })
    }).then(result => {
      if (result.type === "success") {
        decodeToken(result.params.id_token);
      } else if (result.params && result.params.error) {
        Alert.alert(
          "Error",
          result.params.error_description ||
            "Something went wrong while logging in."
        );
      }
    }).catch(err => { 
      console.log("==[ Error in AuthSession.startAsync ]====")
      console.log(err) 
    })
  };


  const handleLogoutPress = () => {
    console.log('Deleting the ID-Tokent-key')

    SecureStore.deleteItemAsync()
  };

  return (
    <View style={{padding: 10}}>
        <Headline style={{ marginBottom: 10}}>
            Welcome to Water Walk!
        </Headline>
        <Text>We use Auth0 for LogIn & SingUp</Text>

        <Image style={styles.image} source={require('../../../assets/auth0Logo1.png')} />

        
        <Button mode="contained"
          style={{ marginBottom: 10, paddingTop: 10, paddingBottom: 10}}
          onPress={() => {
            console.log('Attempting to login', email, password)
            handleLoginPress()
            // logInUser()
        }}>
          Log In
        </Button>

        <Button mode="text" style={{ marginLeft: 'auto'}}
          onPress={() => {
              console.log('Forgot Password')
              navigation.navigate('ForgotPassword')
            }
          } >
          Forgot your password?
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

const styles = StyleSheet.create({
  image: {
    width: 270,
    height: 150,
  }
})

function mapDispatcherToProps(dispatch) {
  return {
    logInUser: () => dispatch({ type: 'LOGIN_USER' })
  }
}

export default connect(null, mapDispatcherToProps)(LogIn);


