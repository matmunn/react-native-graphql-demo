import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

import LoginUser from './LoginUser'
import CreateUser from './CreateUser'

export default class Login extends React.Component {
  state = {
    isRegistering: true,
  }

  render() {
    const { isRegistering } = this.state

    return (
      <View style={styles.container}>
        {
          isRegistering ? (
            <CreateUser />
          ) : (
            <LoginUser />
          )
        }
        <Button
          onPress={() => this.setState({ isRegistering: !isRegistering })} 
          title={isRegistering ? 'Login' : 'Register'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
