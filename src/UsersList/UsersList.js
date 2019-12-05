import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class UserList extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        <NavLink to='/new'>Add User</NavLink>
        <ul>
          {this.props.users.map((user, idx) => {
            return (
              <li key={idx}>
                <h3>{user.name} {user.surName}</h3>
                <button onClick={() => this.props.onDelete(idx)}>Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: (number) => dispatch({ type: 'DEL', payload: number })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)