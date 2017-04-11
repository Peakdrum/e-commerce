import React from 'react';
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.css'

injectTapEventPlugin();

const App = () =>	
	<div>
		<h1>Hello</h1>
		<MuiThemeProvider>
			<RaisedButton>Test</RaisedButton>
		</MuiThemeProvider>
	</div>

render(
		<App/>, document.getElementById("app"))