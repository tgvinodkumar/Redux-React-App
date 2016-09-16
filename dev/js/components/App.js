import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
require ('../../scss/style.scss');

export default class App extends Component {
	render() {
		return(
	<div>
		<h2>user List:</h2>
		<UserList />
		<hr/>
		<h2>user Details:</h2>
		<UserDetail />
	</div>
	);
	}
}