import React from 'react'
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native'

import Posts from './components/posts/Posts'

import navigationStyles from './styles/navigationStyles'

class Home extends React.Component {
  static navigationOptions = {
    ...navigationStyles,
    title: 'Hey',
  }

  goToPost = () => {
    this.props.navigation.navigate('Post')
  }
  
  newPost = () => {
    this.props.navigation.navigate('NewPost')
  }

  render() {
    return (
      <View style={styles.container}>
        <Posts navigation={this.props.navigation} />
        <TouchableHighlight
          style={styles.newPost}
          underlayColor={'red'}
          onPress={this.newPost}
        >
          <Text style={styles.newPostText}>New Post</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  newPost: {
    backgroundColor: 'goldenrod',
    padding: 20,
  },
  newPostText: {
    textAlign: 'center',
    fontSize: 20,
  }
});

export default Home
