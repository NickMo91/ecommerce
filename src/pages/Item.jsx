import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	_handleAddCart = (itemId) => {
		this.props.handleAdd(this.props.item.id);
	}

	render() {
		const { item, handleAdd } = this.props;

		return (
			<div className="item-page">
				<h1 className = "item-page-item-name">{item.name}</h1>
				<div className = "item-page-item-image">
				 {item.images.map((item) => {
				 return ([
					 <img src = {item.medium} className = "item-page-item-img"/>,
					 ]);
			  })}
				</div>
				<button className="item-page-btn" onClick={this._handleAddCart} value={item.id}>
				add Cart
			  </button>
				<div className = "item-page-items-description">
				 <p className = "description">{item.description}</p>
				 <p>{item.category}</p>
				 <h1>${item.price}</h1>
			 </div>
				<div className = "specs">
					{item.specs.map((item) => {
						return ([
					 	<div className="value">{item.value}</div>,
							<div className="label">{item.label}:</div>,
					 ]);
				 })}

				</div>
			</div>

		);
	}
}



export default Item;
