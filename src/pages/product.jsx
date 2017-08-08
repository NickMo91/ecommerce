import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class Product extends Component {
	render() {
		return (
			<div>
				<h1>Hi I'm Product</h1>
				<div className="home-page-products">
					{PRODUCTS.map((product) =>
						(<h1 className="hm-pg-prdct-rndr">
							{product.name}
							{product.description}
							{product.price}
						</h1>),
						(<img className="hm-pg-prdct-img" src={"product.images"}/>)
					)}
				</div>
			</div>
		);
	}
}

export default Product;
