import React, { Component } from "react";
import PRODUCTS from "json/products.json";
class Home extends Component {
	render() {
		return (
			<div className="home-pages">
				<h1>Hello, I'm Home!</h1>
				<div className="home-page-products">
					{PRODUCTS.map((product) => ([
						<div className="home-page-products-render">
							<h1>{product.name}</h1>
							<p>{product.category}</p>
							<p>{product.price}</p>
							<img src={product.images[0].medium}/>
						</div>,
					])

					)}
				</div>
			</div>
		);
	}
}

export default Home;
