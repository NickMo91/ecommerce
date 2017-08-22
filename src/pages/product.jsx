import "./Product.scss";
import React, { Component } from "react";
import { getProducts } from "actions/products";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Product extends Component {
	componentDidMount() {
		this.props.getProducts();
	}
	render() {
		const { products } = this.props;
		return (
			<div className="product-page">
				{products.map((product, index) => {
					return ([
						<div className="product-page-products">
							<h1 className="product-page-products-header">{product.name}</h1>
							<Link className="product-page-products-l" to={`/item/${product.id}`}>
								<img className="product-page-products-img"
									 src={product.images[0].medium}
								/>
							</Link>
							<p className="product-page-products-category">
								Category: {product.category}
							</p>
							<p className="product-page-products-price">Price: ${product.price}</p>
						</div>,
					]);
				}
				)}

			</div>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		products: state.products.products,
	};
}
export default connect(mapStateToProps, { getProducts })(Product);
