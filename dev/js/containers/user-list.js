import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';



class UserList extends Component{

	creaeListItems() {
		return this.props.users.map((user)=>{

			return(
				<li keyParams={user.id} 
					onClick = {() => this.props.selectUser(user)}
				>
				{user.name}
				</li>
			);
		})
	}

	render(){
		return (
			<ul>
				{this.creaeListItems()}
			</ul>
		);
	}
}
function mapStateToProps(state){
	return {
		users: state.users
	}
}
function matchDispatchToProps(dispatch){
	return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);