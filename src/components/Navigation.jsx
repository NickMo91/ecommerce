import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		const { cartCount } = this.props;
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/product",
			text: "Products",
		}, {
			to: "/cart",
			text: "My Cart",
		},
		{
			to: "/checkout",
			text: "Check Out",
		},
		];

		return (
			<nav className="Nav">
				{links.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						className="Nav-link"
						activeClassName="is-active"
						exact
					>
						{link.text}
					</NavLink>
				))}
				<span className = "count">{ cartCount }</span>
			</nav>
		);
	}
}

export default Navigation;
