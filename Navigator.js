import React from 'react'
import { ActivityIndicator } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { compose, graphql } from 'react-apollo'
import { gql } from 'apollo-boost'


import Home from './Home'
import Post from './components/posts/Post'
import NewPost from './components/posts/NewPost'
import Login from './components/user/Login'


const Navigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
    },
    Post: {
      screen: Post,
    },
    NewPost: {
      screen: NewPost,
    },
  })
)

const NavWrapper = ({ loading, user }) => {
  if (loading) {
    return <ActivityIndicator size='large' />
  }

  if (!user) {
    return <Login />
  }

  return <Navigator screenProps={{ user }} />
}

const userQuery = gql`
  query UserQuery {
    user {
      id
      email
    }
  }
`

export default graphql(userQuery, { props: ({ data }) => ({...data}) })(NavWrapper)
