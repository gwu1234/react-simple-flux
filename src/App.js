import React from 'react';
import AddNewItem from './components/AddNewItem';
import ItemsList from './components/ItemsList';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1 className="app-title">Shopping List</h1>
				<AddNewItem />
				<ItemsList />
			</div>
		);
	}
}

export default App;