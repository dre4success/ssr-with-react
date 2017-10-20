import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UsersList extends Component {
  componentDidMount() {

  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }
  render() { 
    return (
      <div>Here's a big list of users</div>
    );
  }
}
function mapStateToProps({users}) {
  return {users}
}
 
export default connect(mapStateToProps, {fetchUsers})(UsersList);