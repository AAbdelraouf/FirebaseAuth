import React, { Component } from 'react';
import { View } from 'react-native';
import LoginScreen from './login/Login';
import SignUpScreen from './signup/Signup';
import { Button } from '../common/Button';


export class RenderAuthentication extends Component {
  state = {
    loginScreen: true,
  }
  
  renderLoginContent = () => (this.state.loginScreen ? <LoginScreen /> : <SignUpScreen />);
  renderSignUpContent = () => this.setState({ loginScreen: !this.state.loginScreen });

  render() {
    return (
      <View>
      { this.renderLoginContent() }
      <Button onPress={this.renderSignUpContent()} >
        Sign Up
      </Button>
      </View>
    );
  }
}

export default RenderAuthentication;
