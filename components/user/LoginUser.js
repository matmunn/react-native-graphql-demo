import React from 'react'
import { View, Text } from 'react-native'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

import { signIn } from '../../loginUtils'

import UserForm from './UserForm'

class LoginUser extends React.Component {
  loginUser = async ({ email, password }) => {
    try {
      const signin = await this.props.signInUser({
        variables: {
          email,
          password,
        },
      })
      signIn(signin.data.signinUser.token)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <UserForm
          onSubmit={this.loginUser}
          type='Login'
        />
      </View>
    );
  }
}

const signInUser = gql `
  mutation SignInUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`

export default graphql(signInUser, { name: 'signInUser' })(LoginUser)
