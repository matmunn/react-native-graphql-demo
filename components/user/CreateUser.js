import React from 'react'
import { View, Text } from 'react-native'
import { compose, graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

import { signIn } from '../../loginUtils'
import UserForm from './UserForm'

class CreateUser extends React.Component {
  createUser = async ({ email, password }) => {
    try {
      const user = await this.props.createUser({
        variables: {
          email,
          password,
        },
      })

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
        <Text>Register</Text>
        <UserForm
          onSubmit={this.createUser}
          type='Register'
        />
      </View>
    );
  }
}

const createUser = gql`
  mutation CreateUserMutation($email: String!, $password: String!) {
    createUser(authProvider: { email: { email: $email, password: $password } }) {
      id
    }
  }
`

const signInUser = gql`
  mutation SignInUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`

export default compose(
  graphql(signInUser, { name: 'signInUser' }),
  graphql(createUser, { name: 'createUser' }),
)(CreateUser)
