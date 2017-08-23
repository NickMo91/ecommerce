import "./Item.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getItem } from "actions/products";


class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		this.props.getItem(this.props.itemId);
	}


	_handleAddCart = () => {
		this.props.handleAdd(this.props.item.id);
	}

	render() {
		const { item, handleAdd } = this.props;
		if (!item) {
			return null;
		}
		return (
			<div className="item-page">
				<h1 className = "item-page-item-name">{item.name}</h1>
				<div className = "item-page-item-image">
				 {item.images.map((img) => {
				 return ([
					 <img src = {img.medium} className = "item-page-item-img"/>,
					 ]);
			  })}
				</div>
				<button className="item-page-btn" onClick={this._handleAddCart} >
				Add To Cart
			  </button>
				<div className = "item-page-items-description">
				 <p className = "description">{item.description}</p>
				 <p>{item.category}</p>
				 <h1>${item.price}</h1>
			 </div>

			</div>

		);
	}
}

function mapStateToProps(state, props) {
	const { activeProduct } = state.products;
	return {
		itemId: props.match.params.itemId,
		item: activeProduct,
	};
}



export default connect(mapStateToProps, { getItem })(Item);
