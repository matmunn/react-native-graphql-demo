import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost'
import { setContext } from 'apollo-link-context'

import Navigator from './Navigator'
import { getToken } from './loginUtils'

const authLink = setContext(async (req, { headers }) => {
  const token = await getToken()
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  }
})

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjuansj3t638601877hossqxf'
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
  link,
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
