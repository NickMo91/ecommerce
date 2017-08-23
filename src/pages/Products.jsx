import "./Products.scss";
import React, { Component } from "react";
import { getProducts } from "actions/products";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Products extends Component {
	componentDidMount() {
		this.props.getProducts();
	}
	render() {
		const { products } = this.props;
		return (
			<div className="products-page">
				{products.map((products, index) => {
					return ([
						<div className="products-page-products">
							<h1 className="products-page-products-header">{products.name}</h1>
							<Link className="products-page-products-l" to={`/product/${products.id}`}>
								<img className="products-page-products-img"
									 src={products.images[0].medium}
								/>
							</Link>
							<p className="products-page-products-category">
								Category: {products.category}
							</p>
							<p className="products-page-products-price">Price: ${products.price}</p>
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
export default connect(mapStateToProps, { getProducts })(Products);
