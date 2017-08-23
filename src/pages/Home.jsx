import "./Home.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<h1>TimeX</h1>
				<p>Go ahead and take a look at our <Link className="home-page-l" to={`/Products`}>Products.</Link></p>
			</div>
		);
	}
}

export default Home;
