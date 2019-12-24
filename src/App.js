import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Destructuring from './components/Destructuring';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Destructuring name="Rabiul" heroName="Batman" /> */}
				{/* <Counter /> */}
				{/* <Message /> */}
				{/* <Greet name="Rabiul" heroName="Batman">
					<p>This is children props</p>
				</Greet>
				<Greet name="Hassan" heroName="Superman">
					<button>Action</button>
				</Greet>
				<Greet name="Mahmud" heroName="Spiderman" />*/}

				<Welcome name="Rabiul" heroName="Batman"　/>
				<Welcome name="Hassan" heroName="Superman"　/>
				<Welcome name="Mahmud" heroName="Spiderman"　/>
				{/* <Hello /> */}
			</div>
		);
	}
}

export default App;
