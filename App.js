import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost'

import Navigator from './Navigator'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjuansj3t638601877hossqxf'
  }),
  cache: new InMemoryCache(),
})

export default class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    )
  }
}
