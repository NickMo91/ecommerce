import "./Product.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleProduct } from "actions/products";
import { addToCart } from "actions/cart";

class Product extends Component {
	componentDidMount() {
		this.props.getSingleProduct(this.props.productId);
	}


	_handleAdd = (product) => {
		this.props.addToCart(this.props.product);
	}

	render() {
		const { product, addedProducts, cart } = this.props;
		if (!product) {
			return null;
		}
		return (
			<div className="product-page">
				<h1 className = "product-page-product-name">{product.name}</h1>
				<div className = "product-page-product-image">
				 {product.images.map((img) => {
				 return ([
					 <img src = {img.medium} className = "product-page-product-img"/>,
					 ]);
			  })}
				</div>
				<button className="product-page-btn" onClick={this._handleAdd} >
				Add To Cart
			  </button>
				<div className = "product-page-products-description">
				 <p className = "description">{product.description}</p>
				 <p>{product.category}</p>
				 <h1>${product.price}</h1>
			 </div>

			</div>

		);
	}
}

function mapStateToProps(state, props) {
	const { activeProduct } = state.products;
	return {
		productId: props.match.params.productId,
		product: activeProduct,
		cart: state.cart,
		cartTotalItems: state.cart,
	};
}



export default connect(mapStateToProps, { getSingleProduct, addToCart })(Product);
