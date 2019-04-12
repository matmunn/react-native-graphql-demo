import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import navigationStyles from '../../styles/navigationStyles'

class Post extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      ...navigationStyles,
      title: navigation.getParam('title'),
    }
  }

  render () {
    const { loading, Post: post } = this.props

    if (loading) {
      return <ActivityIndicator size='large' />
    }

    return (
      <View style={styles.container}>
        <Text style={styles.bodyText}>
          {post.body}
        </Text>
      </View>
    )
  }
}

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      body
    }
  }
`

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  bodyText: {
    fontSize: 16,
  },
})

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
