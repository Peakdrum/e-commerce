import React from 'react'
import './card.css'


const Card = () => <div className="demo-card-wide mdl-card mdl-shadow--2dp">
		<div className="mdl-card__title">
				<h2 className="mdl-card__title-text">WheggNogg</h2>
		</div>
		<div className="mdl-card__supporting-text">
				หุ่นดีได้ด้วยวิธีเดียวเท่านั้น คือการ กินดี ออกกำลังกายดี
				แต่ว่าเราจะมีวิธีอะไรในการ กินโปรตืนให้เพียงพอ? หลากหลายพอ? WheggNogg
				คือการผสมผสานระหว่างโปรตีนจากไข่, เวย์, และ กล้วย
		</div>
		<div className="mdl-card__actions mdl-card--border">
				<a
						className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						มาดูกันว่า มันช่วยอะไรได้บ้าง
				</a>
		</div>
		<div className="mdl-card__menu">
				<button
						className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
						<i className="material-icons">share</i>
				</button>
		</div>
</div>

export default Card;