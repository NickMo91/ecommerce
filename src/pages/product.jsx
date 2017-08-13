import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Product extends Component {
	render() {
		return (
			<div className="product-pages">
				<div className="product-page-products">
					{PRODUCTS.map((product, index) => {
						return ([
							<div className="product-page-products">
								<h1>{product.name}</h1>
								<p>{product.category}</p>
								<p>{product.price}</p>
								<Link to={`/Item/${index}`}>
									<img src={product.images[0].medium}/>
								</Link>
							</div>,
						]);
					}
					)}
				</div>
			</div>
		);
	}
}

export default Product;
