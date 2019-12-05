import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class UserList extends React.Component {
  users = [];

  async componentDidMount() {
    const users = await JSON.parse(localStorage.getItem('state'));
    this.props.onLoad(users);
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <h2>Users</h2>
        <NavLink to='/new'>Add User</NavLink>
        <ul>
          {this.props.users === null ? null :
            this.props.users.map((user, idx) => {
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
    onDelete: (number) => dispatch({ type: 'DEL', payload: number }),
    onLoad: (arr) => dispatch({ type: 'LOAD', users: arr })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)