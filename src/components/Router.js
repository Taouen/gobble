import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Picker from './Picker';


const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/picker" component={Picker}/>
		</Switch>
	</BrowserRouter>
);

export default Router;