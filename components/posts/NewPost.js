import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostForm from './PostForm'

import navStyles from '../../styles/navigationStyles'

class NewPost extends React.Component {
  static navigationOptions = {
    title: 'New Post',
    ...navStyles,
  }

  state = {
    loading: false,
  }

  newPost = ({ title, body }) => {
    const { newPost, navigation, screenProps } = this.props

    this.setState({ loading: true })

    newPost({
      variables: {
        title,
        body,
        userID: screenProps.user.id,
      }
    }).then(() => {
      navigation.goBack()
    }).catch(error => {
      this.setState({ loading: false })
      console.error(error)
    })
  }

  render () {
    return (
      <View>
        {
          this.state.loading ? (
            <ActivityIndicator size='large' />
          ) : (
            <PostForm onSubmit={this.newPost} />
          )
        }
      </View>
    )
  }
}

const newPost = gql`
  mutation NewPost($title: String!, $body: String!, $userId: ID!) {
    createPost(title: $title, body: $body, userId: $userId) {
      id
    }
  }
`

export default graphql(newPost, {
  name: 'newPost',
  options: {
    refetchQueries: [
      'PostsQuery',
    ]
  }
})(NewPost)
