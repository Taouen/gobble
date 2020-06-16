import React from 'react';
import '../css/reset.css';
import '../css/App.css';

class App extends React.Component {
	openPicker = () => {
		this.props.history.push(`/picker`);
	}

	render() {
		return (
			<div className="main-wrapper">
				<h1>Welcome to Gobble!</h1>
				<button onClick={this.openPicker}>Open Recipe Picker</button>
			</div>
		)
	}
}

export default App;