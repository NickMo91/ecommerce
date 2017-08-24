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
import Products from "pages/Products";
import CheckOut from "pages/Checkout";
import Product from "pages/product";

const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Navigation/>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/cart" component={Cart} />
							/>
							<Route exact path="/success" component={Success}/>
							<Route exact path="/products" component={Products}/>
							<Route exact path="/product/:productId" component={Product}/>
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
