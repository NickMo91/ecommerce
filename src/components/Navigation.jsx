import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


class Navigation extends Component {
	render() {
		const { addedProducts } = this.props;
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/products",
			text: "Products",
		}, {
			to: "/cart",
			text: "My Cart",
		},
		{
			to: "/checkout",
			text: `Check Out ${addedProducts} Items`,
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
			</nav>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		addedProducts: state.cart.addedProducts,
	};
}
export default connect(mapStateToProps) (Navigation);
