import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import FourOhFour from "pages/404";
import Cart from "pages/Cart";
import Success from "pages/success";
import Product from "pages/product";
import CheckOut from "pages/checkout";



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/cart" component={Cart}/>
						<Route exact path="/success" component={Success}/>
						<Route exact path="/product/:productId" component={Product}/>
						<Route exact path="/product" component={Product}/>
						<Route exact path="/checkout" component={CheckOut}/>
						<Route path="*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
