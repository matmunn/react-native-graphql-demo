import React from 'react'
import { View } from 'react-native'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostForm from './PostForm'

import navStyles from '../../styles/navigationStyles'

class NewPost extends React.Component {
  static navigationOptions = {
    title: 'New Post',
    ...navStyles,
  }

  newPost = ({ title, body }) => {
    this.props.newPost({
      variables: {
        title,
        body,
      }
    }).then(() => {

    }).catch(error => {
      console.error(error)
    })
  }

  render () {
    return (
      <View>
        <PostForm onSubmit={this.newPost} />
      </View>
    )
  }
}

const newPost = gql`
  mutation NewPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`

export default graphql(newPost, {
  name: 'newPost',
})(NewPost)
