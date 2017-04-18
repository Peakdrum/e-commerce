import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Nav = () => <nav className="mdl-navigation">
		<Link to="/">
				<a className="mdl-navigation__link" href="">Home</a>
		</Link>
		<Link to="/product">
				<a className="mdl-navigation__link" href="">Product</a>
		</Link>
		<a className="mdl-navigation__link" href="">Link</a>
		<a className="mdl-navigation__link" href="">Link</a>
</nav>

const Header = (props) => <div className="demo-layout-transparent mdl-layout mdl-js-layout">
		<header className="mdl-layout__header mdl-layout__header--transparent">
				<div className="mdl-layout__header-row">
						<span className="mdl-layout-title">Title</span>
						<div className="mdl-layout-spacer"></div>
						<Nav />
				</div>
		</header>
		<div className="mdl-layout__drawer">
				<span className="mdl-layout-title">Title</span>
				<Nav />
		</div>
		<main className="mdl-layout__content">
				{props.children}
		</main>
</div>

export default Header;