import React from 'react';
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Card from './components/Card'

injectTapEventPlugin();

const App = () => <div>
	<Card bodyText="หุ่นดีได้ด้วยวิธีเดียวเท่านั้น คือการ กินดี ออกกำลังกายดีแต่ว่าเราจะมีวิธีอะไรในการ กินโปรตืนให้เพียงพอ? หลากหลายพอ? WheggNogg คือการผสมผสานระหว่างโปรตีนจากไข่, เวย์, และ กล้วย"/>
</div>

render(
		<App/>, document.getElementById("app"))