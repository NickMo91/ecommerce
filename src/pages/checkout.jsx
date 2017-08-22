import "./Checkout.scss";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class CheckOut extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		const { cartCount } = this.props;
		return (
			<div className="checkout-page">
				<h1 className="checkout-page-header">Checkout {cartCount} Items</h1>
				<div className="checkout-page-checkout">
					<div className="checkout-page-checkout-shipping">
						<h1>Shipping info:</h1>
						<form  className="checkout-page-checkout-form" method="post">
							First Name:
							<input  name="FirstName" placeholder="First Name"/>
							<br/>
							Last Name:
							<input  name="lastName" placeholder="Last Name"/>
							<br/>
							Address:
							<input  name="StreetAddress" placeholder="Street"/>
							<input  name="City" placeholder="City"/>
							<input  name="State" placeholder="State"/>
							<input  name="Zip" placeholder="Zipcode"/>
						</form>
					</div>
					<Link to="/success">
						<button type="submit" className="checkout-page-checkout-btn">
							Finish Checkout
						</button>
					</Link>

				</div>
			</div>


		);
	}
}

export default CheckOut;
