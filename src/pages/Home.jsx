import "./Home.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div className="home-pages">
				<div className="home-page-rndr">
					<h1>Welcome to TimeX</h1>
					<p>Go ahead and take a look at our <Link to={`/Product`}>Products:</Link></p>
				</div>
			</div>
		);
	}
}

export default Home;
