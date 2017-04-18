import React from 'react';
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import Landing from './pages/Landing'
import Product from './pages/Product'
import Header from './components/Header'
import store from './store'

const App = () => (<Provider store={store}>
	<Router>
		<Header>
			<Route exact path="/" component={Landing} />
			<Route path="/product" component={Product} />
		</Header>
	</Router>
</Provider>)

render(
		<div id="root">
		<App/>
		</div>, document.getElementById("app"))