import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from './Home'
import Post from './components/posts/Post'
import NewPost from './components/posts/NewPost'


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

export default Navigator
