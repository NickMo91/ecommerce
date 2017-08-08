import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/cart",
			text: "My cart",
		}, {
			to: "checkout",
			text: "Check Out",
		}];

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
			</nav>
		);
	}
}

export default Navigation;
