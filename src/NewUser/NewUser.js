import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class NewUser extends React.Component {

  submitHandler = (event) => {
    event.preventDefault();
  }

  onAddHandler = () => {
    this.props.onAdd();
  }

  render() {
    return (
      <div className="container">
        <h2>Add User</h2>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control"
              name="name" onChange={(event) => this.props.onChange('name', event)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="sname">Surname</label>
            <input type="text" className="form-control"
              name="sname" onChange={(event) => this.props.onChange('surName', event)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control"
              name="email" onChange={(event) => this.props.onChange('mail', event)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="tel">Phone</label>
            <input
              type="tel" className="form-control"
              name="tel" onChange={(event) => this.props.onChange('phone', event)}
            ></input>
          </div>

          <NavLink className="btn btn-success mr-2" to='/users' onClick={this.onAddHandler}>Add</NavLink>
          <NavLink className="btn btn-warning" to='/users' onClick={this.props.onCancel}>Cancel</NavLink>
        </form>
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
    onChange: (field, e) => dispatch({ type: 'INP', payload: field, value: e.target.value }),
    onAdd: () => dispatch({ type: 'ADD' }),
    onCancel: () => dispatch({ type: 'CANCEL' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)