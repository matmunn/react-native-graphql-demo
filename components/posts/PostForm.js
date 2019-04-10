import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default class PostForm extends React.Component {
  state = {
    title: '',
    body: '',
  }

  setStateAttribute = (attribute) => (string) => {
    this.setState({ [attribute]: string })
  }

  submitForm = () => {
    const { title, body } = this.state
    this.props.onSubmit({ title, body })
  }

  render () {
    const { title, body } = this.state
    return (
      <View>
        <TextInput
          style={styles.title}
          value={title}
          onChangeText={this.setStateAttribute('title')}
        />
        <TextInput
          style={styles.body}
          value={body}
          onChangeText={this.setStateAttribute('body')}
        />
        <Button
          onPress={this.submitForm}
          title='Save Post'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
  },
  body: {
    height: 400,
    borderColor: '#333',
    borderWidth: 1,
    textAlignVertical: 'top',
  }
});
