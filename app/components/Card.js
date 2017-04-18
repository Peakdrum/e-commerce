import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'


const Card = (props) => <div className="demo-card-wide mdl-card mdl-shadow--2dp">
		<div className="mdl-card__title">
				<h2 className="mdl-card__title-text">{props.header}</h2>
		</div>
		<div className="mdl-card__supporting-text">
				{props.bodyText}
		</div>
		<div className="mdl-card__actions mdl-card--border">
			<Link to="/product">
				<a
						className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						{props.buttonText}
				</a>
			</Link>
		</div>
</div>

export default Card;