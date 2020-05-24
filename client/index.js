import ApolloClient from 'apollo-client'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import App from './components/App'
import LoginFrom from './components/LoginForm'
import SignupFrom from './components/SignupForm'
import Dashboard from './components/Dashboard'

import requireAuth from './components/requireAuth'

const client = new ApolloClient({
	dataIdFromObject: (o) => o.id,
})

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<Route path="/login" component={LoginFrom} />
					<Route path="/signup" component={SignupFrom} />
					<Route path="/dashboard" component={requireAuth(Dashboard)} />
				</Route>
			</Router>
		</ApolloProvider>
	)
}

ReactDOM.render(<Root />, document.querySelector('#root'))
