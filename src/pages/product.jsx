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
	};

	render() {
		const { product, addedProducts, cart } = this.props;


		if (!product) {
			return null;
		}

		return (
			<div className="product-page">
				<h1 className = "product-page-name">{product.name}</h1>
				<div className= "product-page-render">
					<div className = "product-page-render-image">
						{product.images.map((product) => {
							return ([
								<img src = {product.medium} className="product-page-render-image-img"/>,
							]);
						})}

					</div>
					<div className="product-page-render-btn">
						<button className="product-page-btn" onClick={this._handleAdd}>
				Add To Cart
			  </button>
					</div>
					<div className = "product-page-render-description">
						 <p className="category">Category: {product.category}</p>
						 <h1 className="price">Price: ${product.price}</h1>
				 <p className="description">{product.description}</p>
			 </div>
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
		addedProducts: state.cart,
	};
}



export default connect(mapStateToProps, { getSingleProduct, addToCart })(Product);
