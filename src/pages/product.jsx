import "./Product.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Product extends Component {
	render() {
		return (
			<div className="product-page">
				{PRODUCTS.map((product, index) => {
					return ([
						<div className="product-page-products">
							<h1 className="product-page-products-header">{product.name}</h1>
							<p className="product-page-products-category">Category: {product.category}</p>
							<Link className="product-page-products-l" to={`/Item/${index}`}>
								<img className="product-page-products-img"
									 src={product.images[0].medium}
								/>
							</Link>
							<p className="product-page-products-price">Price: ${product.price}</p>
						</div>,
					]);
				}
				)}

			</div>
		);
	}
}

export default Product;
