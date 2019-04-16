import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

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

const NavWrapper = (props) => {
  return <Login />
  return <Navigator />
}

export default NavWrapper
