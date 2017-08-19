import "./App.scss";
import React from "react";
import PRODUCTS from "json/products.json";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import FourOhFour from "pages/404";
import Cart from "pages/Cart";
import Success from "pages/Success";
import Product from "pages/Product";
import CheckOut from "pages/Checkout";
import Item from "pages/Item";

const store = createStore(reducers);

class App extends React.Component {
	state = {
		product: PRODUCTS,
		cart: [],
		cartCount: 0,
	};

	_getProduct = (itemId) => {
		return this.state.product.reduce((prev, item) => {
			return item.id === itemId ? item : prev;
		});
	}

	_handleAdd = (itemId) => {
		const { product, cart } = this.state;
		this.setState({
			cart: [...cart, this._getProduct(itemId)],
			cartCount: cart.length + 1,
		});
	};

	render() {
		const { product, cart, cartCount } = this.state;
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Navigation cartCount={ this.cartCount }/>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/cart" render={(props) => {
								return (
									<Cart
										cart={Cart}
										cartCount={cartCount}
									/>
								);
							}}
							/>
							<Route exact path="/success" component={Success}/>
							<Route exact path="/product" render={(props) => {
								return (
									<Product {...props}
										product={product}
									/>
								);
							}}
							/>
							<Route exact path="/item/:itemId" render={(props) => {
								return (
									<Item
										handleAdd={this._handleAdd}
										item={this._getProduct(props.match.params.itemId)}
									/>
								);
							}}
							/>
							<Route exact path="/Checkout" component={CheckOut}/>
							<Route path="*" component={FourOhFour} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
