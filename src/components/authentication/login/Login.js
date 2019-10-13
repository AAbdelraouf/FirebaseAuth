import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase from 'firebase';
import LoginForm from './LoginForm';
import { Header, Button, Spinner } from '../../../components/common';
import firebaseConfig from '../../firebase/firebaseConfig';


export class Login extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    /* firebase.initializeApp({
      apiKey: 'AIzaSyDQb6toOr-V_VhbGparVTdVjrOKb09KIR0',
      authDomain: 'authentication-3c6da.firebaseapp.com',
      databaseURL: 'https://authentication-3c6da.firebaseio.com',
      projectId: 'authentication-3c6da',
      storageBucket: '',
      messagingSenderId: '548596965445',
      appId: '1:548596965445:web:621daaf69e9adf65c5832c',
      measurementId: 'G-K5WPP14M46'
    }); */

    firebaseConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebaseConfig.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Log In" />
      {this.renderContent()}
    </View>
    );
  }
}

export default Login;
