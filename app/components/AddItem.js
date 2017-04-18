import React from 'react'
import './addItem.css'

export default (props) => <div>
		<button 
			className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"
			onClick={()=>props.onMinus()}
		>
			<i className="material-icons">remove</i>
		</button>
		<div className="mdl-textfield mdl-js-textfield quantity">
			<input className="mdl-textfield__input quantity" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="productQuantity" maxLength="3"/>
			<label className="mdl-textfield__label quantity" htmlFor="productQuantity">{props.children}</label>
			<span className="mdl-textfield__error quantity">number only</span>
		</div>
		<button 
			className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"
			onClick={()=>props.onAdd()}
		>
			<i className="material-icons">add</i>
		</button>
	</div>

