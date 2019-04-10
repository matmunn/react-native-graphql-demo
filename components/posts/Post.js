import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import navigationStyles from '../../styles/navigationStyles'

class Post extends React.Component {
  static navigationOptions = {
    ...navigationStyles,
    title: 'Post',
  }

  render () {
    const { loading, Post: post } = this.props

    if (loading) {
      return <ActivityIndicator size={80} />
    }

    return (
      <View>
        <Text>
          {post.title}
        </Text>
      </View>
    )
  }
}

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
    }
  }
`

export default graphql(
  postQuery,
  {
    options: (props) => ({
      variables: {
        id: props.navigation.getParam('id')
      }
    }),
    props: ({ data }) => ({
      ...data
    }),
  }
)(Post)
