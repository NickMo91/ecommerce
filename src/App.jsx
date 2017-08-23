import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "reducers";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import FourOhFour from "pages/404";
import Cart from "pages/Cart";
import Success from "pages/Success";
import Product from "pages/Product";
import CheckOut from "pages/Checkout";
import Item from "pages/Item";

const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {
	state = {
		cart: [],
		cartCount: 0,
	};

	_getProduct = (itemId) => {
		return this.state.product.reduce((prev, item) => {
			return item.id === itemId ? item : prev;
		});
	}

	_handleAdd = (itemId) => {
		const { products, cart } = this.state;
		this.setState({
			cart: [...cart, this._getProduct(itemId)],
			cartCount: cart.length + 1,
		});
	};

	render() {
		const { products, cart, cartCount } = this.state;
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Navigation cartCount={ cartCount }/>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/cart" render={(props) => {
								return (
									<Cart
										cart={cart}
										cartCount={cartCount}
									/>
								);
							}}
							/>
							<Route exact path="/success" component={Success}/>
							<Route exact path="/product" component={Product}/>
							<Route exact path="/item/:itemId" component={Item}/>
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
