import "./Product.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleProduct } from "actions/products";


class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		this.props.getSingleProduct(this.props.productId);
	}


	_handleAddCart = () => {
		this.props.handleAdd(this.props.product.id);
	}

	render() {
		const { product, handleAdd } = this.props;
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
				<button className="product-page-btn" onClick={this._handleAddCart} >
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
	};
}



export default connect(mapStateToProps, { getSingleProduct })(Product);
