import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Furnitures from './App';

class Routes extends Component {
render() {
    return(
			<div>
				<Switch>
					<Route exact path="/" component={Furnitures}/>
					<Redirect to="/" />
				</Switch>
			</div>
    );
	}
}

export default Routes;