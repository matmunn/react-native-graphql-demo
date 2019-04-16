import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem, Body, Right, Icon } from 'native-base'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

class Posts extends React.Component {
  navigateToPost = (post) => () => {
    this.props.navigation.navigate(
      'Post',
      {
        id: post.id,
        title: post.title,
      }
    )
  }

  render() {
    const { allPosts, loading, navigation, refetch } = this.props

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={allPosts}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <ListItem
                onPress={this.navigateToPost(item)}
              >
                <Body>
                  <Text>
                    {item.title}
                  </Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </ListItem>
            )
          }
          refreshing={loading}
          onRefresh={() => { refetch() }}
          style={{
            flex: 1,
          }}
        />
      </View>
    );
  }
}

const postsQuery = gql`
  query PostsQuery {
    allPosts(orderBy: createdAt_DESC) {
      id
      title
    }
  }
`

export default graphql(postsQuery, { props: ({ data }) => ({ ...data }) })(Posts)
