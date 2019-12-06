import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class UserList extends React.Component {
  users = [];

  async componentDidMount() {
    const users = localStorage.getItem('state')? await JSON.parse(localStorage.getItem('state')) 
    : [] ;
    this.props.onLoad(users);
  }

  render() {
    console.log(this.props.users)
    return (
      <div className="container">
        <h2>Users</h2>
        <NavLink to='/new' className="btn btn-primary mb-5">Add User</NavLink>
        <ul className="list-group">
          {this.props.users === null ? null :
            this.props.users.map((user, idx) => {
              return (
                <li key={idx} className="list-group-item">
                  <h3>{user.name} {user.surName}</h3>
                  <button className="btn btn-danger mb-5" onClick={() => this.props.onDelete(idx)}>Delete</button>
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