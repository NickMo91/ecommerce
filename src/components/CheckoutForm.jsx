import "./CheckoutForm.scss";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { submitOrder } from "actions/checkout";
import { Link } from "react-router-dom";


class CheckoutForm extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				name: "",
				address: "",
				city: "",
				state: "",
				zipcode: "",
				error: null,
			};
		}
	}

	_handleChange = (ev) => {
		this.setState({
			[ev.target.name]: [ev.target.value].toString() });
	}

	_handleSubmit = (ev) => {
		ev.preventDefault();
		const { cart, cartTotalItems } = this.props;
		this.props.submitOrder(this.state);
	}

	render() {
		const { name, address, zipCode, city, state, value  } = this.state;
		const { error, orderSuccess, orderFailure, cart, cartTotalItems } = this.props;

		let message;

		if (orderSuccess) {
			message = (<div className="OrderFormSuccess">
				<Link to= "/products"> <p>Your Order Was Successfully Placed! Continue Shopping .</p></Link>
			</div>);
		}

		if (orderFailure) {
			message = <div className="OrderFormFailure"> { error } </div>;
		}


    		return (
    			<div className="checkout-form">
    				<form onSubmit={this._handleSubmit}>
    					<div className="checkout-form-form">
    						<div className="checkout-form-form-name">
    							<label name="name">Name:</label>
    							<input type="text" name="name" onChange={this._handleChange} required />
    						</div>
    						<div className="checkout-form-form-address">
    							<label name="address">Street address:</label>
    							<input type="text" name="address" onChange={this._handleChange} required />
    						</div>
    						<div className="checkout-form-form-city">
    							<label name="city">City:</label>
    							<input type="text" name="city" onChange={this._handleChange} required />
    						</div>
    						<div className="checkout-form-form-state">
    							<label name="state">State:</label>
							<input type="text" name="state" onChange={this._handleChange} required />
    						</div>
    						<div className="checkout-form-form-name-zip">
    							<label name="zipcode">Zip code:</label>
    							<input type="text" name="zipcode" onChange={this._handleChange} required />
    						</div>
    						<div className="checkout-form-form-button">
    							<button type="submit" onSubmit={this._handleSubmit}>
										Place Your Order
							</button>
    						</div>
						<div className="checkout-form-form-message">
					  { message }
				 </div>
    					</div>
    				</form>
    			</div>
    		);
    	}
}

function mapStateToProps(state, props) {
	return {
		error: state.checkout.error,
		orderSuccess: state.checkout.orderSuccess,
		orderFailure: state.checkout.orderFailure,
		cart: state.cart.cart,
		cartTotalItems: state.cart.cartTotalItems,
	};
}


export default connect(mapStateToProps, { submitOrder }) (CheckoutForm);
