import React from 'react'
import { Button, Text, View } from 'react-native'
import { Form, Item, Input, Label } from 'native-base'

export default class UserForm extends React.Component {
  state = {
    email: '',
    password: '',
  }

  setTextValue = (field) => (textValue) => {
    this.setState({ [field]: textValue })
  }

  submitForm = () => {
    const { email, password } = this.state
    this.props.onSubmit({ email, password })
  }

  render () {
    const { email, password } = this.state

    return (
      <Form>
        <Item floatingLabel>
          <Label>
            Email
          </Label>
          <Input
            keyboardType='email-address'
            value={email}
            onChangeText={this.setTextValue('email')}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            Password
          </Label>
          <Input
            secureTextEntry
            value={password}
            onChangeText={this.setTextValue('password')}
          />
        </Item>
        <Button
          title={this.props.type}
          onPress={this.submitForm}
        />
      </Form>
    )
  }
}
