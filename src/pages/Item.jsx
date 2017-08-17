import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemId: props.match.params.itemId,
		};
	}
	render() {
		const item = PRODUCTS[this.state.itemId];
		return (
			<div className="item-page">
				<div className="item-page-items">
					<h1 className="item-pg-items-header">
						{item.name}
					</h1>
					<img className="item-pg-items-img" src={item.images[0].small}/>
					<img className="item-pg-items-img" src={item.images[1].small}/>
					<img className="item-pg-items-img" src={item.images[2].small}/>
					<p>{item.price}</p>
					<p>{item.category}</p>
					<button>Add to Cart</button>
				</div>
				<div className="item-page-items-description">
					<p className="item-page-items-description-p">
						{item.description}
					</p>
				</div>
			</div>


		);
	}
}

export default Item;
