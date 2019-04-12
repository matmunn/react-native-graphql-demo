import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Form, Item, Input, Label } from 'native-base'

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
      <Form>
        <Item floatingLabel>
          <Label>
            Title
          </Label>
          <Input
            value={title}
            onChangeText={this.setStateAttribute('title')}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            Body
          </Label>
          <Input
            multiline
            style={styles.body}
            value={body}
            onChangeText={this.setStateAttribute('body')}
          />
        </Item>
        <Button
          onPress={this.submitForm}
          title='Save Post'
        />
      </Form>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    height: 400,
    textAlignVertical: 'top',
  }
});
