import React from 'react';
import ListStore from '../stores/listStore';

class ItemsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: ListStore.getAllItems()
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({ items: ListStore.getAllItems() });
	}

	componentWillMount() {
		ListStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		ListStore.removeChangeListener(this._onChange);
	}

	render() {

		let noItemsMessage;

		// Show a friendly message instead if there are no items.
		if (!this.state.items.length) {
			noItemsMessage = (<li className="no-items">Your List is empty !</li>);
		}

		return (
			<ul className="items-list">
				{noItemsMessage}
				{this.state.items.map((itemDetails) => {
					let amountType = parseFloat(itemDetails.amount) > 0 ? 'positive' : 'negative';
					return (<li key={itemDetails.id}>{itemDetails.description} <span className={amountType}>{itemDetails.amount}</span></li>);
				})}
			</ul>
		);
	}
}

export default ItemsList;
