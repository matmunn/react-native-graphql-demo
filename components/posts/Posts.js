import React from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { ListItem } from 'native-base'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

class Posts extends React.Component {
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
                onPress={
                  () => {
                    navigation.navigate('Post', { id: item.id })
                  }
                }
              >
                <Text>
                  {item.title}
                </Text>
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
  {
    allPosts {
      id
      title
    }
  }
`

export default graphql(postsQuery, { props: ({ data }) => ({ ...data }) })(Posts)
