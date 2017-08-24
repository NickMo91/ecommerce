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
				<h1 className="products-page-heading">TimeX</h1>
				<div className="products-page-render">
					{products.map((products, index) => {
						return ([
							<div className="products-page-render-products">
								<h1 className="products-page-render-products-header">{products.name}</h1>
								<Link className="products-page-render-products-l" to={`/product/${products.id}`}>
									<img className="products-page-render-products-img"
										src={products.images[0].medium}
									/>
								</Link>
								<p className="products-page-render-products-category">
								Category: {products.category}
								</p>
								<p className="products-page-render-products-price">Price: ${products.price}</p>
							</div>,
						]);
					}
					)}
				</div>
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
