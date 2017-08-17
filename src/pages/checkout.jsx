import "./Checkout.scss";
import React, { Component } from "react";

class CheckOut extends Component {
	render() {
		return (
			<div className="checkout-page">
				<h1 className="checkout-page-header">Checkout</h1>
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

					{/* <div className="checkout-page-checkout-billing">
						<h1>Billing info:</h1>
						<form className="checkout-page-checkout-form" method="post">
							<input  name="name" placeholder="First Name"/>
							<br/>
							<input  name="name" placeholder="Last Name"/>
							<br/>
							<input  name="address" placeholder="Street"/>
							<input  name="address" placeholder="City"/>
							<input  name="address" placeholder="State"/>
							<input  name="address" placeholder="Zipcode"/>
						</form>
					</div> */}
					<button type="submit" className="checkout-page-checkout-btn">
						Finish Checkout
					</button>
				</div>
			</div>


		);
	}
}

export default CheckOut;
