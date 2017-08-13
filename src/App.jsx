import "./App.scss";
import React from "react";
import PRODUCTS from "json/products.json";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import FourOhFour from "pages/404";
import Cart from "pages/Cart";
import Success from "pages/Success";
import Product from "pages/Product";
import CheckOut from "pages/Checkout";
import Item from "pages/Item";


class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/Cart" component={Cart}/>
						<Route exact path="/success" component={Success}/>
						<Route exact path="/Product" component={Product}/>
						<Route exact path="/Item/:itemId" component={Item}/>
						<Route exact path="/Checkout" component={CheckOut}/>
						<Route path="*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
