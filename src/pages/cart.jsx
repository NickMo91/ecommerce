import "./Cart.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Cart extends Component {
	render() {
		const { cart, addedProducts } = this.props;

		const totalPrice = cart.reduce(function(prev, item) {
			return prev + parseFloat(item.price);
		},0);

		if (addedProducts > 0) {
			return (
				<div className="cart">

					{cart.map((item) => {
						return (
							<div className="cart-product">
								<h1 className="cart-product-name">{ item.name } </h1>
								<img src={ item.images[0].small } className="cart-product-img"/>
								<h2 className="cart-product-price">${ item.price }</h2>
							</div>
						);
					})}
					<div className="cart-info">
			 <p className="cart-info-total-items">Total Items: { addedProducts }</p>
			 <p className="cart-info-total-price">Total Price: ${ totalPrice }</p>
			 <div >
		 						<Link to="/checkout">
		 							<button className="cart-button-checkout"> Proceed To Checkout </button>
		 						</Link>
							<br/>
							<Link to="/Products">
								<button className="cart-button-add">Add More Items</button>
							</Link>
		 					</div>
		 </div>
				</div>
			);
		} else {
			return (
				<div>
					<p className="empty-cart">Your Cart Is Currently Empty!</p>
					<Link to="/Products">
						<p className="empty-cart-link">Go Back To Products!</p>
					</Link>
				</div>
			);
		}
	}
}

function mapStateToProps(state, props) {
	return {
		addedProducts: state.cart.addedProducts,
		cart: state.cart.cart,
	};
}


export default connect (mapStateToProps) (Cart);
